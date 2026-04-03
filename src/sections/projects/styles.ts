import styled, { keyframes } from 'styled-components';

const glowPulse = keyframes`
  0%, 100% { opacity: 0; transform: scale(0.8); }
  50%       { opacity: 1; transform: scale(1.1); }
`;

export const StyledProjectsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  .title-container {
    text-align: center;
    margin-bottom: 60px;
  }

  h2 {
    font-size: clamp(26px, 5vw, ${(props) => props.theme.fontSize?.xxl});
    font-weight: ${(props) => props.theme.fontw?.semibold};
    background: ${(props) => props.theme.brand?.gradientText};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  /* ── Bento Grid ─────────────────────────────────────── */
  .projects-bento {
    display: grid;
    width: 100%;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: auto;
    gap: 16px;

    /* Card 1: wide left */
    .bento-card--1 { grid-column: 1 / 8; }
    /* Card 2: narrow right */
    .bento-card--2 { grid-column: 8 / 13; }
    /* Card 3: narrow left */
    .bento-card--3 { grid-column: 1 / 6; }
    /* Card 4: wide right */
    .bento-card--4 { grid-column: 6 / 13; }

    @media (max-width: ${(props) => props.theme.breakpoints?.lg}) {
      grid-template-columns: repeat(2, 1fr);
      .bento-card--1,
      .bento-card--2,
      .bento-card--3,
      .bento-card--4 { grid-column: auto; }
    }

    @media (max-width: ${(props) => props.theme.breakpoints?.sm}) {
      grid-template-columns: 1fr;
      .bento-card--1,
      .bento-card--2,
      .bento-card--3,
      .bento-card--4 { grid-column: 1 / -1; }
    }
  }
`;

export const StyledProject = styled.div`
  cursor: default;
  position: relative;

  &:hover,
  &:focus-within {
    outline: 0;

    .project-inner {
      border-color: rgba(6, 147, 227, 0.45);
      transform: translateY(-6px);
      box-shadow:
        0 24px 50px -12px rgba(0, 0, 0, 0.5),
        0 0 0 1px rgba(6, 147, 227, 0.2),
        inset 0 1px 0 rgba(255, 255, 255, 0.06);
    }

    .card-glow {
      animation: ${glowPulse} 2s ease-in-out infinite;
    }

    .project-number {
      background: ${(props) => props.theme.brand?.gradientText};
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .project-folder svg {
      fill: ${(props) => props.theme.brand?.primary};
      filter: drop-shadow(0 0 8px rgba(6, 147, 227, 0.5));
    }

    .project-title {
      background: ${(props) => props.theme.brand?.gradientText};
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
  }

  .project-inner {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    padding: 2rem 1.75rem;
    border-radius: ${(props) => props.theme.borderRadius};

    /* Glassmorphism */
    background: rgba(18, 14, 38, 0.55);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border: 1px solid rgba(6, 147, 227, 0.1);
    box-shadow:
      0 8px 32px rgba(0, 0, 0, 0.35),
      inset 0 1px 0 rgba(255, 255, 255, 0.04);
    transition: all 0.35s cubic-bezier(0.645, 0.045, 0.355, 1);
  }

  /* Ambient glow behind the card */
  .card-glow {
    position: absolute;
    inset: 20% 25%;
    background: radial-gradient(ellipse, rgba(6, 147, 227, 0.18) 0%, transparent 70%);
    z-index: -1;
    border-radius: 50%;
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.4s ease;
  }

  .project-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
  }

  .project-number {
    font-family: ${(props) => props.theme.fontFamily?.fontMono};
    font-size: clamp(2.8rem, 4vw, 4rem);
    font-weight: ${(props) => props.theme.fontw?.bold};
    color: rgba(163, 168, 195, 0.2);
    line-height: 1;
    transition: all 0.3s ease;
    letter-spacing: -0.02em;
  }

  .project-links {
    display: flex;
    align-items: center;
    gap: 4px;

    a {
      display: flex;
      padding: 6px;
      color: ${(props) => props.theme.text?.accent};
      transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
      border-radius: 6px;

      svg {
        fill: ${(props) => props.theme.text?.accent};
        width: 19px;
        height: 19px;
        transition: fill 0.25s ease;
      }

      &:hover {
        color: ${(props) => props.theme.brand?.primary};
        background: rgba(6, 147, 227, 0.1);
        svg { fill: ${(props) => props.theme.brand?.primary}; }
      }
    }
  }

  .project-folder {
    margin-bottom: 14px;
    svg {
      fill: rgba(163, 168, 195, 0.5);
      width: 36px;
      height: 36px;
      transition: all 0.3s ease;
    }
  }

  .project-title {
    margin: 0 0 12px;
    color: ${(props) => props.theme.text?.default};
    font-size: clamp(${(props) => props.theme.fontSize?.lg}, 2.5vw, ${(props) => props.theme.fontSize?.xl});
    font-weight: ${(props) => props.theme.fontw?.semibold};
    line-height: 1.2;
    transition: all 0.3s ease;
  }

  .project-description {
    color: ${(props) => props.theme.text?.accent};
    font-size: ${(props) => props.theme.fontSize?.sm};
    line-height: 1.65;
    flex-grow: 1;

    a {
      color: ${(props) => props.theme.brand?.primary};
      text-decoration: underline;
      text-underline-offset: 3px;
    }
  }

  .project-tech-list {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 8px;
    padding: 0;
    margin: 20px 0 0;
    list-style: none;

    li {
      font-family: ${(props) => props.theme.fontFamily?.fontMono};
      font-size: ${(props) => props.theme.fontSize?.xxs};
      color: ${(props) => props.theme.brand?.primary};
      padding: 4px 10px;
      border-radius: 20px;
      border: 1px solid rgba(6, 147, 227, 0.25);
      background: rgba(6, 147, 227, 0.06);
      white-space: nowrap;
      transition: all 0.2s ease;

      &:hover {
        background: rgba(6, 147, 227, 0.15);
        border-color: rgba(6, 147, 227, 0.5);
      }
    }
  }
`;
