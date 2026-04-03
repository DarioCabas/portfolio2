import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;
    borderRadiusButton: string;
    hamburgerWidth: string;
    fontFamily: {
      fontSans: string;
      fontMono: string;
    };
    brand: {
      primary: string;
      secondary: string;
      accent: string;
      purple: string;
      gradient: string;
      gradientText: string;
    };
    fontSize: {
      xxs: string;
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
    };
    breakpoints: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    fontw: {
      light: number;
      regular: number;
      semibold: number;
      bold: number;
    };
    transitions: {
      easing: string;
      default: string;
      hamBefore: string;
      hamBeforeActive: string;
      hamAfter: string;
      hamAfterActive: string;
    };
    mixins: {
      flexCenter: any;
      flexBetween: any;
      link: any;
      inlineLink: any;
      button: any;
      smallButton: any;
      bigButton: any;
      boxShadow: any;
      fancyList: any;
    };
    bg: {
      default: string;
      defaultLight: string;
      reverse: string;
    };
    text: {
      default: string;
      reverse: string;
      accent: string;
    };
    shadows: {
      default: string;
      small: string;
      medium: string;
      large: string;
    };
    breakpoint?: {
      md: string;
    };
  }
}
