import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled, { keyframes } from 'styled-components';
import { NAV_DELAY } from '@/lib/constants';
import { StyleSheetManager } from 'styled-components';

/* ── animations ──────────────────────────────────────── */
const glitch1 = keyframes`
  0%, 100% { clip-path: inset(0 0 95% 0); transform: translate(-4px, 0); }
  20%       { clip-path: inset(30% 0 50% 0); transform: translate(4px, 0); }
  40%       { clip-path: inset(70% 0 10% 0); transform: translate(-2px, 0); }
  60%       { clip-path: inset(10% 0 80% 0); transform: translate(3px, 0); }
  80%       { clip-path: inset(50% 0 30% 0); transform: translate(-3px, 0); }
`;

const glitch2 = keyframes`
  0%, 100% { clip-path: inset(80% 0 0% 0);  transform: translate(4px, 0); }
  20%       { clip-path: inset(10% 0 70% 0); transform: translate(-4px, 0); }
  40%       { clip-path: inset(50% 0 20% 0); transform: translate(2px, 0); }
  60%       { clip-path: inset(0% 0 90% 0);  transform: translate(-3px, 0); }
  80%       { clip-path: inset(40% 0 40% 0); transform: translate(3px, 0); }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0); }
  50%       { transform: translateY(-10px); }
`;

const scanline = keyframes`
  0%   { top: -10%; }
  100% { top: 110%; }
`;

/* ── styled components ───────────────────────────────── */
const StyledPage = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 20px;

  @media (max-width: ${(props) => props.theme.breakpoints?.sm}) {
    padding: 16px;
  }
`;

const StyledCard = styled.div`
  position: relative;
  width: 100%;
  max-width: 560px;
  padding: 56px 48px;
  border-radius: ${(props) => props.theme.borderRadius};
  background: rgba(18, 14, 38, 0.6);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(6, 147, 227, 0.15);
  box-shadow:
    0 30px 80px rgba(0, 0, 0, 0.5),
    inset 0 1px 0 rgba(255, 255, 255, 0.06);
  text-align: center;
  overflow: hidden;

  /* Moving scanline */
  &::before {
    content: '';
    position: absolute;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, transparent, rgba(6, 147, 227, 0.4), transparent);
    animation: ${scanline} 4s linear infinite;
    pointer-events: none;
  }

  @media (max-width: ${(props) => props.theme.breakpoints?.sm}) {
    padding: 40px 24px;
  }
`;

const StyledNumber = styled.div`
  position: relative;
  font-family: ${(props) => props.theme.fontFamily?.fontMono};
  font-size: clamp(96px, 22vw, 160px);
  font-weight: ${(props) => props.theme.fontw?.bold};
  line-height: 1;
  margin-bottom: 8px;
  background: ${(props) => props.theme.brand?.gradientText};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: ${float} 5s ease-in-out infinite;
  user-select: none;

  /* Glitch layers */
  &::before,
  &::after {
    content: '404';
    position: absolute;
    inset: 0;
    background: ${(props) => props.theme.brand?.gradientText};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  &::before {
    animation: ${glitch1} 3.5s infinite steps(1);
    opacity: 0.7;
  }

  &::after {
    animation: ${glitch2} 3.5s infinite steps(1);
    opacity: 0.5;
  }
`;

const StyledSubtitle = styled.h2`
  font-size: clamp(${(props) => props.theme.fontSize?.lg}, 4vw, ${(props) => props.theme.fontSize?.xl});
  font-weight: ${(props) => props.theme.fontw?.semibold};
  color: ${(props) => props.theme.text?.default};
  margin-bottom: 12px;
`;

const StyledDescription = styled.p`
  color: ${(props) => props.theme.text?.accent};
  font-size: ${(props) => props.theme.fontSize?.md};
  line-height: 1.65;
  max-width: 380px;
  margin: 0 auto 32px;
`;

const StyledProgressWrapper = styled.div`
  margin: 0 auto 36px;
  max-width: 380px;
  text-align: left;
`;

const StyledProgressLabel = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;

  span {
    font-family: ${(props) => props.theme.fontFamily?.fontMono};
    font-size: ${(props) => props.theme.fontSize?.xxs};
    color: ${(props) => props.theme.text?.accent};
  }

  .pct {
    color: ${(props) => props.theme.brand?.primary};
    font-weight: ${(props) => props.theme.fontw?.semibold};
  }
`;

const StyledProgressTrack = styled.div`
  width: 100%;
  height: 4px;
  background: rgba(163, 168, 195, 0.12);
  border-radius: 4px;
  overflow: hidden;
`;

const StyledProgressFill = styled.div<{ $pct: number }>`
  height: 100%;
  width: ${({ $pct }) => $pct}%;
  background: linear-gradient(90deg, #0693E3, #7C3AED);
  border-radius: 4px;
  transition: width 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
  box-shadow: 0 0 10px rgba(6, 147, 227, 0.5);
`;

const StyledStatusDots = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 8px;
  font-family: ${(props) => props.theme.fontFamily?.fontMono};
  font-size: ${(props) => props.theme.fontSize?.xxs};
  color: ${(props) => props.theme.text?.accent};

  .dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: ${(props) => props.theme.brand?.primary};
    animation: dotPulse 1.4s ease-in-out infinite;

    &:nth-child(2) { animation-delay: 0.2s; }
    &:nth-child(3) { animation-delay: 0.4s; }

    @keyframes dotPulse {
      0%, 80%, 100% { opacity: 0.3; transform: scale(0.8); }
      40%            { opacity: 1;   transform: scale(1); }
    }
  }
`;

const StyledHomeButton = styled.a`
  ${({ theme }) => theme.mixins?.bigButton};
  position: relative;

  &::before {
    content: '';
    position: absolute;
    inset: -2px;
    border-radius: ${(props) => props.theme.borderRadiusButton};
    padding: 2px;
    background: linear-gradient(135deg, #0693E3, #7C3AED);
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    pointer-events: none;
  }

  &:hover, &:focus {
    background: linear-gradient(135deg, rgba(6,147,227,0.12), rgba(124,58,237,0.12));
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(6, 147, 227, 0.25);
    border-color: transparent;
  }
`;

/* ── fake timer logic ─────────────────────────────────── */
// Milestones: progress value → message
const MILESTONES: [number, string][] = [
  [0,  'Initializing workspace...'],
  [12, 'Fetching assets...'],
  [28, 'Compiling components...'],
  [47, 'Optimizing bundles...'],
  [63, 'Running tests...'],
  [78, 'Almost there...'],
  [91, 'Wrapping up...'],
  [99, 'Just one more thing...'],
];

const getMilestoneLabel = (pct: number) => {
  let label = MILESTONES[0][1];
  for (const [threshold, msg] of MILESTONES) {
    if (pct >= threshold) label = msg;
  }
  return label;
};

/* ── component ───────────────────────────────────────── */
const NotFoundPage = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [progress, setProgress] = useState(0);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    const t = setTimeout(() => setIsMounted(true), NAV_DELAY);
    return () => clearTimeout(t);
  }, []);

  /* Fake progress: speeds up, slows near 99, then stalls */
  useEffect(() => {
    if (!isMounted) return;

    const tick = () => {
      setProgress((prev) => {
        if (prev >= 99) return 99; // stall — "we're still working on it"
        // slower increments as we approach 99
        const step = prev < 50 ? Math.random() * 4 + 2
                    : prev < 80 ? Math.random() * 2 + 1
                    : Math.random() * 0.8 + 0.2;
        return Math.min(prev + step, 99);
      });
      timerRef.current = setTimeout(tick, progress >= 80 ? 800 : 400);
    };

    timerRef.current = setTimeout(tick, 600);
    return () => clearTimeout(timerRef.current);
  }, [isMounted]);

  const shouldForwardProp = (prop: any) => prop !== 'isMounted';

  return (
    <StyleSheetManager shouldForwardProp={shouldForwardProp}>
      <TransitionGroup component={null}>
        {isMounted && (
          <CSSTransition timeout={500} classNames="fadeup">
            <StyledPage>
              <StyledCard>
                <StyledNumber>404</StyledNumber>
                <StyledSubtitle>Page Not Found</StyledSubtitle>
                <StyledDescription>
                  Oops — looks like this page doesn&apos;t exist yet.
                  We might be building it right now!
                </StyledDescription>

                <StyledProgressWrapper>
                  <StyledProgressLabel>
                    <span>{getMilestoneLabel(progress)}</span>
                    <span className="pct">{Math.floor(progress)}%</span>
                  </StyledProgressLabel>
                  <StyledProgressTrack>
                    <StyledProgressFill $pct={progress} />
                  </StyledProgressTrack>
                  <StyledStatusDots>
                    <div className="dot" />
                    <div className="dot" />
                    <div className="dot" />
                    <span>Working on it</span>
                  </StyledStatusDots>
                </StyledProgressWrapper>

                <Link href="/">
                  <StyledHomeButton>Go Home</StyledHomeButton>
                </Link>
              </StyledCard>
            </StyledPage>
          </CSSTransition>
        )}
      </TransitionGroup>
    </StyleSheetManager>
  );
};

export default NotFoundPage;
