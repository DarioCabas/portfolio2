interface SRConfig {
  srConfig: (delay?: number, viewFactor?: number) => {
    origin: string;
    distance: string;
    duration: number;
    delay: number;
    rotate: { x: number; y: number; z: number };
    opacity: number;
    scale: number;
    easing: string;
    mobile: boolean;
    reset: boolean;
    useDelay: string;
    viewFactor: number;
    viewOffset: { top: number; right: number; bottom: number; left: number };
  };
}

const sr: SRConfig = {
  srConfig: (delay = 200, viewFactor = 0.25) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};

export default sr;
