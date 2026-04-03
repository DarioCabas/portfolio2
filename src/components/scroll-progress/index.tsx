import { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const slideIn = keyframes`
  from { opacity: 0; transform: scaleX(0); transform-origin: left; }
  to   { opacity: 1; transform: scaleX(1); }
`;

const ProgressBar = styled.div<{ $progress: number }>`
  position: fixed;
  top: 0;
  left: 0;
  height: 3px;
  width: ${({ $progress }) => $progress}%;
  background: linear-gradient(90deg, #0693E3, #7C3AED);
  z-index: 9999;
  border-radius: 0 2px 2px 0;
  transition: width 0.1s linear;
  box-shadow: 0 0 10px rgba(6, 147, 227, 0.6);
  animation: ${slideIn} 0.3s ease-out;
`;

const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return <ProgressBar $progress={progress} aria-hidden="true" role="progressbar" aria-valuenow={Math.round(progress)} />;
};

export default ScrollProgress;
