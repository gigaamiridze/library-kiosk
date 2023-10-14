export interface ITheme {
  colors: IColors;
  fonts: IFonts;
  fontSizes: IFontSizes;
  fontWeights: IFontWeights;
  borderRadius: IBorderRadius;
  animations: IAnimations;
}

export interface IColors {
  white: string;
  flashWhite: string;
  gainsboro: string;
  black: string;
  primary: string;
  purple: string;
  independence: string;
}

export interface IFonts {
  primary: string;
  secondary: string;
}

export interface IFontSizes {
  small: string;
  regular: string;
  medium: string;
  large: string;
  xLarge: string;
  xxLarge: string;
}

interface IFontWeights {
  thin: number;
  extraLight: number;
  light: number;
  regular: number;
  medium: number;
  semiBold: number;
  bold: number;
  extraBold: number;
  black: number;
}

interface IBorderRadius extends IFontSizes {
  circle: string;
}

interface IAnimations {
  easeInOut: string;
  easeInfinite: string;
  linearInfinite: string;
}
