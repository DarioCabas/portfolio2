import { useEffect, useCallback } from 'react';
import styled, { keyframes } from 'styled-components';
import usePrefersReducedMotion from '@/hooks/use-prefers-reduced-motion';

/* ── animations ─────────────────────────────────── */
const fadeIn = keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`;

const scaleIn = keyframes`
  from { opacity: 0; transform: scale(0.92); }
  to   { opacity: 1; transform: scale(1); }
`;

/* ── styled ─────────────────────────────────────── */
const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  z-index: 9000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  background: rgba(10, 8, 22, 0.92);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  animation: ${fadeIn} 0.25s ease;
  cursor: zoom-out;

  @media (max-width: ${(props) => props.theme.breakpoints?.sm}) {
    padding: 16px;
  }
`;

const ImageWrap = styled.div`
  position: relative;
  max-width: min(900px, 92vw);
  max-height: 88vh;
  animation: ${scaleIn} 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  cursor: default;

  img {
    display: block;
    width: 100%;
    height: auto;
    max-height: 85vh;
    object-fit: contain;
    border-radius: ${(props) => props.theme.borderRadius};
    box-shadow:
      0 40px 100px rgba(0, 0, 0, 0.7),
      0 0 0 1px rgba(6, 147, 227, 0.15);
  }
`;

const CloseBtn = styled.button`
  position: fixed;
  top: 20px;
  right: 20px;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: rgba(18, 14, 38, 0.8);
  border: 1px solid rgba(6, 147, 227, 0.2);
  color: ${(props) => props.theme.text?.accent};
  font-size: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  z-index: 9001;

  &:hover {
    background: rgba(6, 147, 227, 0.15);
    border-color: rgba(6, 147, 227, 0.5);
    color: ${(props) => props.theme.text?.default};
    transform: scale(1.1);
  }

  @media (max-width: ${(props) => props.theme.breakpoints?.sm}) {
    top: 12px;
    right: 12px;
  }
`;

const Caption = styled.p`
  position: absolute;
  bottom: -36px;
  left: 0;
  right: 0;
  text-align: center;
  font-family: ${(props) => props.theme.fontFamily?.fontMono};
  font-size: ${(props) => props.theme.fontSize?.xs};
  color: ${(props) => props.theme.text?.accent};
  opacity: 0.7;
`;

/* ── component ──────────────────────────────────── */
interface ImageViewerProps {
  src: string;
  alt: string;
  onClose: () => void;
}

const ImageViewer = ({ src, alt, onClose }: ImageViewerProps) => {
  const prefersReducedMotion = usePrefersReducedMotion();

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [handleKeyDown]);

  /* View Transitions API — morph from thumbnail to fullscreen */
  const startTransition = (cb: () => void) => {
    if (!prefersReducedMotion && 'startViewTransition' in document) {
      (document as any).startViewTransition(cb);
    } else {
      cb();
    }
  };

  const handleClose = () => startTransition(onClose);

  return (
    <Backdrop onClick={handleClose} role="dialog" aria-modal="true" aria-label={`Image viewer: ${alt}`}>
      <CloseBtn
        onClick={(e) => { e.stopPropagation(); handleClose(); }}
        aria-label="Close image viewer"
      >
        ✕
      </CloseBtn>
      <ImageWrap onClick={(e) => e.stopPropagation()}>
        {/* The view-transition-name must match the thumbnail */}
        <img
          src={src}
          alt={alt}
          style={{ viewTransitionName: `project-img-${alt.replace(/\s+/g, '-').toLowerCase()}` }}
        />
        <Caption>{alt}</Caption>
      </ImageWrap>
    </Backdrop>
  );
};

export default ImageViewer;
