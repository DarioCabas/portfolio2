import { createGlobalStyle } from 'styled-components';
import { TransitionStyles } from './transitions';

export default createGlobalStyle`
  /*
  -------------------------------------------------------------------------------
  1.  Base styles
  -------------------------------------------------------------------------------
  */
  * {
    border: 0;
    box-sizing: inherit;
    -webkit-font-smoothing: auto;
    font-weight: inherit;
    margin: 0;
    outline: 0;
    padding: 0;
    text-decoration: none;
    text-rendering: optimizeLegibility;
    -webkit-appearance: none;
    -moz-appearance: none;
  }

  *, *:before, *:after {
    -webkit-box-sizing: inherit;
    -moz-box-sizing: inherit;
    box-sizing: inherit;
  }

  html {    
    box-sizing: border-box;
    display: flex;
    min-height: 100%;
    width: 100%;
    box-sizing: border-box;
    font-size: 62.5%; /*16px -> 100%   |   10px -> 62.5%   |   10px = 1rem*/
    line-height: 1.5;
    color: ${(props) => props.theme.text.default};
    padding: 0;
    margin: 0;
    -webkit-font-smoothing: auto;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    font-family: ${(props) => props.theme.fontFamily.fontSans}  
  }

  @media (min-width: 1600px) {
    html {
        font-size: 70%;
    }
  }

  body {
    box-sizing: border-box;
    background-color: ${(props) => props.theme.bg.default};
    background-image:
      radial-gradient(ellipse 80% 50% at 20% -10%, rgba(6, 147, 227, 0.07) 0%, transparent 60%),
      radial-gradient(ellipse 60% 40% at 80% 110%, rgba(124, 58, 237, 0.06) 0%, transparent 60%);
    background-attachment: fixed;
    width: 100%;
    height: 100%;
    font-weight: 400;
    overscroll-behavior-y: none;
    -webkit-overflow-scrolling: touch;

    &.hidden {
      overflow: hidden;
    }

    &.blur {
      overflow: hidden;

      header {
        background-color: transparent;
      }

      #content > * {
        filter: blur(5px) brightness(0.7);
        transition: ${(props) => props.theme.transitions.default};
        pointer-events: none;
        user-select: none;
      }
    }

  }

  #root {
    height: 100%;
    width: 100%;
  }

  p,a,b {
    font-size: ${(props) => props.theme.fontSize.md};
  }

  a {
    color: currentColor;
    text-decoration: none;
    display: inline-block;
  }

  a:hover {
    cursor: pointer;
  }

  ul {
    list-style: none
  }
  /* Custom scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-track {
    background: ${(props) => props.theme.bg.default};
  }
  ::-webkit-scrollbar-thumb {
    background: linear-gradient(180deg, #0693E3, #7C3AED);
    border-radius: 4px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(180deg, #0693E3cc, #7C3AEDcc);
  }

  /* Selection */
  ::selection {
    background: rgba(6, 147, 227, 0.25);
    color: #F4F4F4;
  }

  /* Cursor blink keyframe for typing animation */
  @keyframes cursorBlink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
  }

  /* Focus visible ring */
  :focus-visible {
    outline: 2px solid #0693E3;
    outline-offset: 3px;
    border-radius: 4px;
  }

  /* View Transitions API */
  @keyframes vt-fade-in  { from { opacity: 0; } }
  @keyframes vt-fade-out { to   { opacity: 0; } }
  @keyframes vt-slide-in {
    from { opacity: 0; transform: scale(0.85); }
  }
  @keyframes vt-slide-out {
    to   { opacity: 0; transform: scale(1.1); }
  }

  ::view-transition-old(root) {
    animation: 250ms ease vt-fade-out;
  }
  ::view-transition-new(root) {
    animation: 300ms cubic-bezier(0.34, 1.56, 0.64, 1) vt-slide-in;
  }

  /* Per-image morph transition */
  ::view-transition-old(project-img) {
    animation: 300ms ease vt-fade-out;
  }
  ::view-transition-new(project-img) {
    animation: 400ms cubic-bezier(0.34, 1.56, 0.64, 1) vt-slide-in;
  }

  ${TransitionStyles};
`;
