import styled, { keyframes } from 'styled-components';

const shimmer = keyframes`
  0%   { background-position: -200% center; }
  100% { background-position:  200% center; }
`;

const borderGlow = keyframes`
  0%, 100% { box-shadow: 0 0 0 0 rgba(6,147,227,0); }
  50%       { box-shadow: 0 0 20px 4px rgba(6,147,227,0.18); }
`;

export const StyledAboutSection = styled.section`
  max-width: 100%;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 60px;
    align-items: start;

    @media (max-width: ${(props) => props.theme.breakpoints?.md}) {
      display: flex;
      flex-direction: column;
      gap: 40px;
    }
  }
`;

export const StyledText = styled.div`
  padding: 32px 36px;
  border-radius: ${(props) => props.theme.borderRadius};
  background: rgba(18, 14, 38, 0.5);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border: 1px solid rgba(6, 147, 227, 0.1);
  box-shadow:
    0 8px 32px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.04);
  transition: border-color 0.4s ease, box-shadow 0.4s ease;

  &:hover {
    border-color: rgba(6, 147, 227, 0.25);
    box-shadow:
      0 12px 40px rgba(0, 0, 0, 0.4),
      inset 0 1px 0 rgba(255, 255, 255, 0.06);
  }

  @media (max-width: ${(props) => props.theme.breakpoints?.sm}) {
    padding: 24px 20px;
  }

  p {
    color: ${(props) => props.theme.text?.accent};
    line-height: 1.75;
    margin-bottom: 12px;

    &:last-of-type { margin-bottom: 0; }
  }

  .skills-label {
    margin-top: 28px;
    margin-bottom: 0;
    font-family: ${(props) => props.theme.fontFamily?.fontMono};
    font-size: ${(props) => props.theme.fontSize?.xs};
    color: ${(props) => props.theme.brand?.primary};
    letter-spacing: 0.08em;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    gap: 10px;

    &::after {
      content: '';
      flex: 1;
      height: 1px;
      background: linear-gradient(90deg, rgba(6,147,227,0.4), transparent);
    }
  }

  ul.skills-list {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    padding: 0;
    margin: 16px 0 0;
    list-style: none;

    li {
      font-family: ${(props) => props.theme.fontFamily?.fontMono};
      font-size: ${(props) => props.theme.fontSize?.xs};
      color: ${(props) => props.theme.brand?.primary};
      padding: 5px 14px;
      border: 1px solid rgba(6, 147, 227, 0.3);
      border-radius: 20px;
      background: rgba(6, 147, 227, 0.06);
      transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
      cursor: default;

      &:hover {
        background: rgba(6, 147, 227, 0.15);
        border-color: rgba(6, 147, 227, 0.6);
        box-shadow: 0 0 12px rgba(6, 147, 227, 0.2);
        transform: translateY(-2px);
      }
    }
  }
`;

export const StyledPic = styled.div`
  position: relative;
  width: 100%;
  max-width: 300px;
  justify-self: center;

  @media (max-width: ${(props) => props.theme.breakpoints?.md}) {
    max-width: 260px;
    align-self: center;
  }

  .wrapper {
    display: block;
    position: relative;
    width: 100%;
    border-radius: ${(props) => props.theme.borderRadius};
    animation: ${borderGlow} 4s ease-in-out infinite;
    transition: transform 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);

    &:hover {
      transform: translateY(-6px);

      &::after {
        top: 12px;
        left: 12px;
      }

      .img {
        filter: none;
      }
    }

    .img {
      object-fit: cover;
      width: 100%;
      height: auto;
      border-radius: ${(props) => props.theme.borderRadius};
      filter: saturate(0.85) contrast(1.05);
      transition: filter 0.4s ease;
      display: block;
    }

    /* Glass overlay */
    &::before {
      content: '';
      position: absolute;
      inset: 0;
      border-radius: ${(props) => props.theme.borderRadius};
      background: linear-gradient(
        135deg,
        rgba(6, 147, 227, 0.08) 0%,
        rgba(124, 58, 237, 0.06) 100%
      );
      z-index: 1;
      pointer-events: none;
      mix-blend-mode: overlay;
    }

    /* Offset frame */
    &::after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: ${(props) => props.theme.borderRadius};
      border: 2px solid ${(props) => props.theme.brand?.primary};
      top: 18px;
      left: 18px;
      z-index: -1;
      transition: all 0.35s cubic-bezier(0.645, 0.045, 0.355, 1);
      background: linear-gradient(
        135deg,
        rgba(6, 147, 227, 0.06),
        rgba(124, 58, 237, 0.06)
      );
    }
  }

  /* Shimmer badge below photo */
  .pic-badge {
    margin-top: 24px;
    padding: 8px 16px;
    border-radius: 20px;
    background: rgba(18, 14, 38, 0.6);
    border: 1px solid rgba(6, 147, 227, 0.2);
    backdrop-filter: blur(8px);
    text-align: center;

    span {
      font-family: ${(props) => props.theme.fontFamily?.fontMono};
      font-size: ${(props) => props.theme.fontSize?.xxs};
      background: linear-gradient(
        90deg,
        ${(props) => props.theme.brand?.primary},
        #a78bfa,
        ${(props) => props.theme.brand?.primary}
      );
      background-size: 200% auto;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      animation: ${shimmer} 3s linear infinite;
    }
  }
`;
