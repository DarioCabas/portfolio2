import styled from 'styled-components';

export const StyledHeroSection = styled.section`
  ${({ theme }) => theme.mixins?.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  position: relative;
  overflow: hidden;

  .hero-content {
    position: relative;
    z-index: 1;
  }

  .greeting {
    margin: 0 0 8px 4px;
    color: ${(props) => props.theme.brand?.primary};
    font-family: ${(props) => props.theme.fontFamily?.fontMono};
    font-size: clamp(
      ${(props) => props.theme.fontSize?.sm},
      5vw,
      ${(props) => props.theme.fontSize?.md}
    );
    font-weight: 400;
    letter-spacing: 0.05em;

    @media (max-width: ${(props) => props.theme.breakpoints?.sm}) {
      margin: 0 0 20px 2px;
    }
  }

  .description {
    margin: 28px 0 50px;
    max-width: 540px;
    color: ${(props) => props.theme.text?.accent};
    line-height: 1.7;
  }

  .cta-group {
    display: flex;
    align-items: center;
    gap: 20px;
    flex-wrap: wrap;
  }

  .email-link {
    ${({ theme }) => theme.mixins?.bigButton};
    background: linear-gradient(135deg, rgba(6, 147, 227, 0.08), rgba(124, 58, 237, 0.08));
    border-image: linear-gradient(135deg, #0693E3, #7C3AED) 1;
    border: 2px solid transparent;
    background-clip: padding-box;
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
      background: linear-gradient(135deg, rgba(6, 147, 227, 0.15), rgba(124, 58, 237, 0.15));
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(6, 147, 227, 0.25);
    }
  }

  .secondary-link {
    color: ${(props) => props.theme.text?.accent};
    font-family: ${(props) => props.theme.fontFamily?.fontMono};
    font-size: ${(props) => props.theme.fontSize?.sm};
    transition: ${(props) => props.theme.transitions?.default};
    position: relative;
    padding-bottom: 2px;

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 1px;
      background: linear-gradient(90deg, #0693E3, #7C3AED);
      transition: width 0.3s ${(props) => props.theme.transitions?.easing};
    }

    &:hover {
      color: ${(props) => props.theme.text?.default};
      &::after {
        width: 100%;
      }
    }
  }
`;

export const StyledBigTitle = styled.h1`
  margin: 0;
  font-size: clamp(40px, 8vw, 80px);
  font-weight: ${(props) => props.theme.fontw?.semibold};
  line-height: 1.05;
  color: ${(props) => props.theme.text?.default};
  letter-spacing: -0.02em;
`;

export const StyledGradientTitle = styled.h2`
  margin: 12px 0 0;
  font-size: clamp(32px, 7vw, 70px);
  font-weight: ${(props) => props.theme.fontw?.semibold};
  line-height: 1.05;
  letter-spacing: -0.02em;
  background: ${(props) => props.theme.brand?.gradientText};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;
