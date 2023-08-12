import { useState, useEffect } from 'react';

interface UsePrefersReducedMotionHook {
  (): boolean;
}

const QUERY = '(prefers-reduced-motion: no-preference)';
const isRenderingOnServer = typeof window === 'undefined';

const getInitialState = () =>
  isRenderingOnServer ? true : !window.matchMedia(QUERY).matches;

const usePrefersReducedMotion: UsePrefersReducedMotionHook = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(getInitialState);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(QUERY);
    const listener = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(!event.matches);
    };
    mediaQueryList.addListener(listener);

    return () => {
      mediaQueryList.removeListener(listener);
    };
  }, []);

  return prefersReducedMotion;
};

export default usePrefersReducedMotion;
