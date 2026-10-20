import {
  BufferAttribute,
  BufferGeometry,
  Color,
  PerspectiveCamera,
  Points,
  Scene,
  ShaderMaterial,
  WebGLRenderer,
} from 'three';

// Builds the hero point terrain and returns a cleanup function
export function mountTerrain(canvas: HTMLCanvasElement): () => void {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  const renderer = new WebGLRenderer({ canvas, alpha: true, antialias: false, powerPreference: 'low-power' });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  const scene = new Scene();
  const camera = new PerspectiveCamera(50, 1, 0.1, 100);
  camera.position.set(0, 2.6, 6.5);
  camera.lookAt(0, 0, 0.5);

  // Wide enough for short desktop bands; phones simply see the middle
  const width = 40;
  const depth = 8;
  const columns = 220;
  const rows = 48;
  const positions = new Float32Array(columns * rows * 3);
  for (let row = 0; row < rows; row++) {
    for (let column = 0; column < columns; column++) {
      const index = (row * columns + column) * 3;
      positions[index] = (column / (columns - 1) - 0.5) * width;
      positions[index + 1] = 0;
      positions[index + 2] = (row / (rows - 1) - 0.5) * depth;
    }
  }

  const geometry = new BufferGeometry();
  geometry.setAttribute('position', new BufferAttribute(positions, 3));

  // Heights are computed on the GPU so the ridge can breathe without touching buffers
  const material = new ShaderMaterial({
    transparent: true,
    depthWrite: false,
    uniforms: {
      uTime: { value: 0 },
      uGrow: { value: 0 },
      uFocus: { value: 0 },
      uFocusStrength: { value: 0 },
      uPixelRatio: { value: renderer.getPixelRatio() },
      uLow: { value: new Color('#a99bf0') },
      uHigh: { value: new Color('#f2b544') },
    },
    vertexShader: /* glsl */ `
      uniform float uTime;
      uniform float uGrow;
      uniform float uFocus;
      uniform float uFocusStrength;
      uniform float uPixelRatio;
      varying float vHeight;
      varying float vDepth;

      float ridge(vec2 p) {
        float h = 0.0;
        // Folded sine gives sharp, Andes-like ridges; smaller waves add texture
        h += (1.0 - abs(sin(p.x * 0.32 + 1.0))) * 1.15;
        h += sin(p.x * 1.1 + p.y * 0.6) * 0.28;
        h += sin(p.x * 2.9 - p.y * 1.3) * 0.1;
        return (h - 0.3) * smoothstep(4.0, -2.0, p.y);
      }

      void main() {
        vec3 p = position;
        // Peaks rise from the ground (uGrow 0 → 1), then the range drifts and breathes
        float breathe = 0.82 + sin(uTime * 0.5 + p.x * 0.18) * 0.18;
        float backRows = smoothstep(4.0, -2.0, p.z);
        // A swell follows the cursor (or wanders on its own on touch screens)
        float focus = exp(-pow((p.x - uFocus) * 0.38, 2.0)) * uFocusStrength * backRows;
        float ripple = sin(p.x * 0.6 - uTime * 1.4 + p.z * 0.8) * 0.1;
        p.y = (ridge(p.xz + vec2(uTime * 0.25, 0.0)) * breathe + focus * 1.1) * uGrow + ripple;
        vHeight = clamp((p.y + 0.3) / 1.6, 0.0, 1.0);
        vec4 mvPosition = modelViewMatrix * vec4(p, 1.0);
        vDepth = clamp(-mvPosition.z / 12.0, 0.0, 1.0);
        gl_PointSize = (1.6 + vHeight * 1.4) * uPixelRatio * (1.2 - vDepth * 0.6);
        gl_Position = projectionMatrix * mvPosition;
      }
    `,
    fragmentShader: /* glsl */ `
      uniform vec3 uLow;
      uniform vec3 uHigh;
      varying float vHeight;
      varying float vDepth;

      void main() {
        float d = length(gl_PointCoord - 0.5);
        if (d > 0.5) discard;
        vec3 color = mix(uLow, uHigh, smoothstep(0.55, 1.0, vHeight));
        gl_FragColor = vec4(color, (1.0 - vDepth * 0.7) * (0.35 + vHeight * 0.65));
      }
    `,
  });

  const points = new Points(geometry, material);
  scene.add(points);

  const pointer = { x: 0, y: 0 };
  let lastMouseMove = -Infinity;
  const onPointerMove = (event: PointerEvent) => {
    pointer.x = event.clientX / window.innerWidth - 0.5;
    pointer.y = event.clientY / window.innerHeight - 0.5;
    if (event.pointerType === 'mouse') lastMouseMove = performance.now();
  };

  // Half the visible terrain width at the band's center, used to map the cursor into world space
  let visibleHalfWidth = 10;
  const cameraDistance = camera.position.length();

  const resize = () => {
    const { clientWidth, clientHeight } = canvas;
    renderer.setSize(clientWidth, clientHeight, false);
    camera.aspect = clientWidth / Math.max(clientHeight, 1);
    camera.updateProjectionMatrix();
    visibleHalfWidth = Math.tan((camera.fov * Math.PI) / 360) * cameraDistance * camera.aspect;
    if (!isRunning) renderer.render(scene, camera);
  };

  let frameId = 0;
  let isRunning = false;
  // Wait for the observer: the band usually starts below the fold, and the peaks should rise in view
  let isVisible = false;
  let elapsed = 0;
  let lastFrame = 0;
  // Growth has its own clock that only starts once most of the band is on screen
  let isRevealed = false;
  let growElapsed = 0;
  const growDuration = 2.6;
  const easeOutCubic = (t: number) => 1 - (1 - t) ** 3;

  const renderFrame = () => {
    const now = performance.now();
    const delta = (now - lastFrame) / 1000;
    elapsed += delta;
    if (isRevealed) growElapsed += delta;
    lastFrame = now;
    material.uniforms.uTime.value = elapsed;
    material.uniforms.uGrow.value = easeOutCubic(Math.min(growElapsed / growDuration, 1));

    const usingMouse = now - lastMouseMove < 2500;
    const focusTarget = usingMouse
      ? pointer.x * 2 * visibleHalfWidth
      : Math.sin(elapsed * 0.3) * visibleHalfWidth * 0.6;
    const focus = material.uniforms.uFocus;
    const strength = material.uniforms.uFocusStrength;
    focus.value += (focusTarget - focus.value) * 0.06;
    strength.value += ((usingMouse ? 1 : 0.7) - strength.value) * 0.04;

    points.rotation.y += (pointer.x * 0.25 - points.rotation.y) * 0.05;
    points.rotation.x += (pointer.y * 0.08 - points.rotation.x) * 0.05;
    renderer.render(scene, camera);
    frameId = requestAnimationFrame(renderFrame);
  };

  const start = () => {
    if (isRunning || reducedMotion.matches || !isVisible || document.hidden) return;
    isRunning = true;
    lastFrame = performance.now();
    renderFrame();
  };

  const stop = () => {
    isRunning = false;
    cancelAnimationFrame(frameId);
  };

  // Reduced motion gets one still frame instead of an animation
  const syncMotion = () => {
    if (reducedMotion.matches) {
      stop();
      material.uniforms.uGrow.value = 1;
      renderer.render(scene, camera);
    } else {
      start();
    }
  };

  const visibilityObserver = new IntersectionObserver(
    ([entry]) => {
      isVisible = entry.isIntersecting;
      if (entry.intersectionRatio >= 0.4) isRevealed = true;
      isVisible ? start() : stop();
    },
    { threshold: [0, 0.4] },
  );
  visibilityObserver.observe(canvas);

  const onVisibilityChange = () => (document.hidden ? stop() : start());

  resize();
  window.addEventListener('resize', resize);
  window.addEventListener('pointermove', onPointerMove, { passive: true });
  document.addEventListener('visibilitychange', onVisibilityChange);
  reducedMotion.addEventListener('change', syncMotion);
  syncMotion();
  canvas.classList.add('is-ready');

  return () => {
    stop();
    visibilityObserver.disconnect();
    window.removeEventListener('resize', resize);
    window.removeEventListener('pointermove', onPointerMove);
    document.removeEventListener('visibilitychange', onVisibilityChange);
    reducedMotion.removeEventListener('change', syncMotion);
    geometry.dispose();
    material.dispose();
    renderer.dispose();
  };
}
