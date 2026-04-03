import styled, { keyframes } from 'styled-components';

const float = keyframes`
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  33%       { transform: translateY(-12px) rotate(2deg); }
  66%       { transform: translateY(-6px) rotate(-1deg); }
`;

const pulseRing = keyframes`
  0%   { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(6, 147, 227, 0.3); }
  70%  { transform: scale(1);    box-shadow: 0 0 0 16px rgba(6, 147, 227, 0); }
  100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(6, 147, 227, 0); }
`;

export const StyledContactSection = styled.section`
  max-width: 680px;
  margin: 0 auto 120px !important;
  text-align: center;
  position: relative;

  @media (max-width: ${(props) => props.theme.breakpoints?.md}) {
    margin: 0 auto 80px !important;
  }

  /* Decorative floating orbs */
  &::before,
  &::after {
    content: '';
    position: absolute;
    border-radius: 50%;
    pointer-events: none;
    z-index: -1;
  }

  &::before {
    width: 180px;
    height: 180px;
    background: radial-gradient(circle, rgba(6, 147, 227, 0.12), transparent 70%);
    top: -40px;
    left: -80px;
    animation: ${float} 7s ease-in-out infinite;

    @media (max-width: ${(props) => props.theme.breakpoints?.sm}) {
      display: none;
    }
  }

  &::after {
    width: 140px;
    height: 140px;
    background: radial-gradient(circle, rgba(124, 58, 237, 0.1), transparent 70%);
    bottom: 20px;
    right: -60px;
    animation: ${float} 9s ease-in-out infinite reverse;

    @media (max-width: ${(props) => props.theme.breakpoints?.sm}) {
      display: none;
    }
  }

  .contact-card {
    padding: 60px 48px;
    border-radius: ${(props) => props.theme.borderRadius};
    background: rgba(18, 14, 38, 0.55);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border: 1px solid rgba(6, 147, 227, 0.12);
    box-shadow:
      0 20px 60px rgba(0, 0, 0, 0.4),
      inset 0 1px 0 rgba(255, 255, 255, 0.05);
    transition: border-color 0.4s ease, box-shadow 0.4s ease;

    &:hover {
      border-color: rgba(6, 147, 227, 0.25);
      box-shadow:
        0 24px 70px rgba(0, 0, 0, 0.5),
        inset 0 1px 0 rgba(255, 255, 255, 0.07);
    }

    @media (max-width: ${(props) => props.theme.breakpoints?.md}) {
      padding: 40px 28px;
    }

    @media (max-width: ${(props) => props.theme.breakpoints?.sm}) {
      padding: 32px 20px;
    }
  }

  .contact-overline {
    display: inline-block;
    font-family: ${(props) => props.theme.fontFamily?.fontMono};
    font-size: ${(props) => props.theme.fontSize?.xs};
    letter-spacing: 0.1em;
    text-transform: uppercase;
    background: ${(props) => props.theme.brand?.gradientText};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 16px;
  }

  .title {
    font-size: clamp(36px, 5vw, 58px);
    font-weight: ${(props) => props.theme.fontw?.semibold};
    line-height: 1.1;
    background: ${(props) => props.theme.brand?.gradientText};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 24px;
  }

  p {
    color: ${(props) => props.theme.text?.accent};
    line-height: 1.75;
    font-size: ${(props) => props.theme.fontSize?.md};
    max-width: 520px;
    margin: 0 auto;
  }

  .email-link {
    ${({ theme }) => theme.mixins?.bigButton};
    display: inline-block;
    font-size: ${(props) => props.theme.fontSize?.sm};
    margin-top: 44px;
    position: relative;
    animation: ${pulseRing} 3s ease-out infinite;
    border-color: transparent;

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
      transform: translateY(-3px);
      box-shadow: 0 14px 36px rgba(6, 147, 227, 0.3);
      animation: none;
    }
  }

  .contact-links {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 32px;

    a {
      display: flex;
      align-items: center;
      gap: 6px;
      font-family: ${(props) => props.theme.fontFamily?.fontMono};
      font-size: ${(props) => props.theme.fontSize?.xxs};
      color: ${(props) => props.theme.text?.accent};
      padding: 6px 14px;
      border-radius: 20px;
      border: 1px solid rgba(163, 168, 195, 0.2);
      background: rgba(163, 168, 195, 0.04);
      transition: all 0.25s ease;

      &:hover {
        color: ${(props) => props.theme.brand?.primary};
        border-color: rgba(6, 147, 227, 0.4);
        background: rgba(6, 147, 227, 0.08);
        transform: translateY(-2px);
      }

      svg {
        width: 14px;
        height: 14px;
        fill: currentColor;
      }
    }
  }
`;
