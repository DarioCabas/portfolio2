import styled, { keyframes } from 'styled-components';

const imageReveal = keyframes`
  from { clip-path: inset(0 100% 0 0); }
  to   { clip-path: inset(0 0% 0 0); }
`;

export const StyledProjectImgWrapper = styled.div`
  grid-column: 6 / -1;
  grid-row: 1 / -1;
  position: relative;
  z-index: 1;
  width: 100%;
  border-radius: ${(props) => props.theme.borderRadius};
  overflow: hidden;

  @media (max-width: ${(props) => props.theme.breakpoints?.md}) {
    grid-column: 1 / -1;
    height: 100%;
    opacity: 0.18;
  }

  .img-btn {
    display: block;
    width: 100%;
    background: none;
    border: none;
    padding: 0;
    cursor: zoom-in;
    border-radius: ${(props) => props.theme.borderRadius};
    overflow: hidden;
    position: relative;

    /* Gradient overlay */
    &::after {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(
        135deg,
        rgba(6, 147, 227, 0.15) 0%,
        rgba(124, 58, 237, 0.12) 100%
      );
      opacity: 0.6;
      transition: opacity 0.4s ease;
      border-radius: ${(props) => props.theme.borderRadius};
      pointer-events: none;
    }

    &:hover::after,
    &:focus::after {
      opacity: 0;
    }

    &:focus-visible {
      outline: 2px solid ${(props) => props.theme.brand?.primary};
      outline-offset: 3px;
    }
  }

  .zoom-hint {
    position: absolute;
    bottom: 12px;
    right: 12px;
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 6px 12px;
    border-radius: 20px;
    background: rgba(18, 14, 38, 0.8);
    backdrop-filter: blur(8px);
    border: 1px solid rgba(6, 147, 227, 0.2);
    font-family: ${(props) => props.theme.fontFamily?.fontMono};
    font-size: ${(props) => props.theme.fontSize?.xxs};
    color: ${(props) => props.theme.text?.accent};
    opacity: 0;
    transform: translateY(4px);
    transition: opacity 0.3s ease, transform 0.3s ease;
    pointer-events: none;
    z-index: 2;

    svg {
      width: 14px;
      height: 14px;
      stroke: ${(props) => props.theme.brand?.primary};
    }
  }

  .img-btn:hover .zoom-hint,
  .img-btn:focus .zoom-hint {
    opacity: 1;
    transform: translateY(0);
  }

  @media (max-width: ${(props) => props.theme.breakpoints?.md}) {
    .zoom-hint { display: none; }
  }

  .img-wrapper {
    position: relative;
    overflow: hidden;
    border-radius: ${(props) => props.theme.borderRadius};
    box-shadow:
      0 20px 60px rgba(0, 0, 0, 0.5),
      0 0 0 1px rgba(6, 147, 227, 0.12);

    .img-cont {
      width: 100%;
      padding-bottom: 62.2857%;
    }

    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: ${(props) => props.theme.borderRadius};
      transition: transform 0.6s cubic-bezier(0.645, 0.045, 0.355, 1),
                  filter 0.4s ease;
      filter: saturate(0.9);

      &:hover {
        transform: scale(1.03);
        filter: saturate(1.1);
      }
    }
  }
`;

export const StyledProjectLinks = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin-top: 14px;
  margin-left: -10px;
  gap: 4px;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px;
    border-radius: 8px;
    color: ${({ theme }) => theme.text?.accent};
    transition: all 0.25s ease;

    svg {
      fill: ${({ theme }) => theme.text?.accent};
      width: 20px;
      height: 20px;
      transition: fill 0.25s ease;
    }

    &:hover {
      background: rgba(6, 147, 227, 0.1);
      color: ${({ theme }) => theme.brand?.primary};
      svg { fill: ${({ theme }) => theme.brand?.primary}; }
    }
  }
`;

export const StyledProject = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(12, 1fr);
  align-items: center;

  &:not(:last-of-type) {
    margin-bottom: 120px;

    @media (max-width: ${(props) => props.theme.breakpoints?.md}) {
      margin-bottom: 70px;
    }

    @media (max-width: ${(props) => props.theme.breakpoints?.sm}) {
      margin-bottom: 30px;
    }
  }

  &:nth-of-type(odd) {
    .project-content {
      grid-column: 7 / -1;
      text-align: right;

      @media (max-width: ${(props) => props.theme.breakpoints?.lg}) { grid-column: 5 / -1; }
      @media (max-width: ${(props) => props.theme.breakpoints?.md}) {
        grid-column: 1 / -1;
        padding: 40px 40px 30px;
        text-align: left;
      }
      @media (max-width: ${(props) => props.theme.breakpoints?.sm}) {
        padding: 25px 25px 20px;
      }
    }

    .project-tech-list {
      justify-content: flex-end;

      @media (max-width: ${(props) => props.theme.breakpoints?.md}) {
        justify-content: flex-start;
      }
    }

    ${StyledProjectLinks} {
      justify-content: flex-end;
      margin-left: 0;
      margin-right: -10px;

      @media (max-width: ${(props) => props.theme.breakpoints?.md}) {
        justify-content: flex-start;
        margin-right: 0;
        margin-left: -10px;
      }
    }

    ${StyledProjectImgWrapper} {
      grid-column: 1 / 8;

      @media (max-width: ${(props) => props.theme.breakpoints?.md}) {
        grid-column: 1 / -1;
      }
    }
  }

  .project-content {
    position: relative;
    grid-column: 1 / 7;
    grid-row: 1 / -1;
    z-index: 2;

    @media (max-width: ${(props) => props.theme.breakpoints?.lg}) { grid-column: 1 / 9; }
    @media (max-width: ${(props) => props.theme.breakpoints?.md}) {
      grid-column: 1 / -1;
      padding: 40px 40px 30px;
      z-index: 5;
    }
    @media (max-width: ${(props) => props.theme.breakpoints?.sm}) {
      padding: 30px 25px 20px;
    }
  }

  .project-overline {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    margin: 0 0 10px;
    font-family: ${(props) => props.theme.fontFamily?.fontMono};
    font-size: ${({ theme }) => theme.fontSize?.xs};
    font-weight: ${({ theme }) => theme.fontw?.regular};
    letter-spacing: 0.1em;
    text-transform: uppercase;
    background: ${(props) => props.theme.brand?.gradientText};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;

    &::before {
      content: '';
      display: inline-block;
      width: 20px;
      height: 1px;
      background: ${(props) => props.theme.brand?.gradient};
      -webkit-text-fill-color: initial;
      background-clip: initial;
    }
  }

  .project-title {
    color: ${({ theme }) => theme.text?.default};
    font-size: clamp(24px, 5vw, 32px);
    font-weight: ${({ theme }) => theme.fontw?.semibold};
    line-height: 1.1;
    margin: 0 0 20px;
    transition: color 0.25s ease;

    &:hover {
      background: ${({ theme }) => theme.brand?.gradientText};
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    @media (max-width: ${(props) => props.theme.breakpoints?.md}) {
      margin: 0 0 16px;
    }
  }

  .project-description {
    position: relative;
    z-index: 2;
    padding: 24px 28px;
    border-radius: ${({ theme }) => theme.borderRadius};
    background: rgba(18, 14, 38, 0.75);
    backdrop-filter: blur(14px);
    -webkit-backdrop-filter: blur(14px);
    border: 1px solid rgba(6, 147, 227, 0.1);
    box-shadow:
      0 8px 32px rgba(0, 0, 0, 0.35),
      inset 0 1px 0 rgba(255, 255, 255, 0.04);
    color: ${({ theme }) => theme.text?.accent};
    font-size: ${({ theme }) => theme.fontSize?.md};
    line-height: 1.7;
    transition: border-color 0.3s ease;

    &:hover {
      border-color: rgba(6, 147, 227, 0.2);
    }

    @media (max-width: ${(props) => props.theme.breakpoints?.md}) {
      padding: 0;
      background: transparent;
      backdrop-filter: none;
      border: none;
      box-shadow: none;
    }

    a {
      ${({ theme }) => theme.mixins?.inlineLink};
    }
  }

  .project-tech-list {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    position: relative;
    z-index: 2;
    margin: 20px 0 0;
    padding: 0;
    list-style: none;

    li {
      font-family: ${({ theme }) => theme.fontFamily?.fontMono};
      font-size: ${({ theme }) => theme.fontSize?.xs};
      color: ${({ theme }) => theme.brand?.primary};
      padding: 4px 12px;
      border-radius: 20px;
      border: 1px solid rgba(6, 147, 227, 0.25);
      background: rgba(6, 147, 227, 0.07);
      white-space: nowrap;
      transition: all 0.2s ease;

      &:hover {
        background: rgba(6, 147, 227, 0.15);
        border-color: rgba(6, 147, 227, 0.5);
      }
    }

    @media (max-width: ${(props) => props.theme.breakpoints?.md}) {
      li { color: ${({ theme }) => theme.text?.accent}; }
    }
  }
`;

export const StyledProjectImage = styled.img`
  object-fit: cover;
  object-position: center center;
  max-width: 100%;
  border-radius: ${(props) => props.theme.borderRadius};

  @media (max-width: ${(props) => props.theme.breakpoints?.md}) {
    width: auto;
    height: 100%;
    opacity: 0.12;
  }
`;
