const baseConfig = {
  opacity: 0,
  scale: 1,
  easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
  mobile: true,
  reset: false,
  useDelay: 'always' as const,
  viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  rotate: { x: 0, y: 0, z: 0 },
};

const sr = {
  // Standard: fade up from bottom
  srConfig: (delay = 200, viewFactor = 0.2) => ({
    ...baseConfig,
    origin: 'bottom',
    distance: '40px',
    duration: 600,
    delay,
    viewFactor,
  }),

  // Slide in from left
  srLeft: (delay = 200, viewFactor = 0.15) => ({
    ...baseConfig,
    origin: 'left',
    distance: '60px',
    duration: 700,
    delay,
    viewFactor,
  }),

  // Slide in from right
  srRight: (delay = 200, viewFactor = 0.15) => ({
    ...baseConfig,
    origin: 'right',
    distance: '60px',
    duration: 700,
    delay,
    viewFactor,
  }),

  // Scale in (for cards)
  srScale: (delay = 200, viewFactor = 0.1) => ({
    ...baseConfig,
    origin: 'bottom',
    distance: '30px',
    duration: 600,
    delay,
    scale: 0.94,
    viewFactor,
  }),

  // Fade up with slight tilt
  srTilt: (delay = 200, viewFactor = 0.15) => ({
    ...baseConfig,
    origin: 'bottom',
    distance: '50px',
    duration: 700,
    delay,
    rotate: { x: 6, y: 0, z: 0 },
    viewFactor,
  }),
};

export default sr;
