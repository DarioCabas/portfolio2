import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import usePrefersReducedMotion from '@/hooks/use-prefers-reduced-motion';

const ThreeBackground = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion || !mountRef.current) return;

    const mount = mountRef.current;
    const width = mount.clientWidth;
    const height = mount.clientHeight;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
    camera.position.z = 80;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    // Particles
    const particleCount = 120;
    const positions = new Float32Array(particleCount * 3);
    const velocities: { x: number; y: number; z: number }[] = [];
    const sizes = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 160;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 120;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 80;
      velocities.push({
        x: (Math.random() - 0.5) * 0.04,
        y: (Math.random() - 0.5) * 0.04,
        z: (Math.random() - 0.5) * 0.02,
      });
      sizes[i] = Math.random() * 2 + 0.5;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

    // Shader material for glowing dots
    const material = new THREE.ShaderMaterial({
      uniforms: {
        color: { value: new THREE.Color('#0693E3') },
        colorSecondary: { value: new THREE.Color('#7C3AED') },
      },
      vertexShader: `
        attribute float size;
        void main() {
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = size * (300.0 / -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        uniform vec3 color;
        uniform vec3 colorSecondary;
        void main() {
          vec2 uv = gl_PointCoord - vec2(0.5);
          float dist = length(uv);
          if (dist > 0.5) discard;
          float alpha = 1.0 - smoothstep(0.1, 0.5, dist);
          float blend = gl_FragCoord.x / 1200.0;
          vec3 finalColor = mix(color, colorSecondary, blend);
          gl_FragColor = vec4(finalColor, alpha * 0.55);
        }
      `,
      transparent: true,
      depthWrite: false,
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // Lines connecting nearby particles
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x0693e3,
      transparent: true,
      opacity: 0.08,
    });

    // Mouse
    let mouseX = 0;
    let mouseY = 0;
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 0.3;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 0.3;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Resize
    const handleResize = () => {
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    // Animation
    let frameId: number;
    const animate = () => {
      frameId = requestAnimationFrame(animate);

      const posArray = geometry.attributes.position.array as Float32Array;

      for (let i = 0; i < particleCount; i++) {
        posArray[i * 3] += velocities[i].x;
        posArray[i * 3 + 1] += velocities[i].y;
        posArray[i * 3 + 2] += velocities[i].z;

        // Wrap around bounds
        if (posArray[i * 3] > 80) posArray[i * 3] = -80;
        if (posArray[i * 3] < -80) posArray[i * 3] = 80;
        if (posArray[i * 3 + 1] > 60) posArray[i * 3 + 1] = -60;
        if (posArray[i * 3 + 1] < -60) posArray[i * 3 + 1] = 60;
      }
      geometry.attributes.position.needsUpdate = true;

      // Subtle camera drift following mouse
      camera.position.x += (mouseX * 5 - camera.position.x) * 0.02;
      camera.position.y += (-mouseY * 5 - camera.position.y) * 0.02;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      geometry.dispose();
      material.dispose();
      lineMaterial.dispose();
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, [prefersReducedMotion]);

  return (
    <div
      ref={mountRef}
      aria-hidden="true"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
        overflow: 'hidden',
      }}
    />
  );
};

export default ThreeBackground;
