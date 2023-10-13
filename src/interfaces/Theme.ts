export interface ITheme {
  colors: IColors;
  fonts: IFonts;
  fontSizes: IFontSizes;
  fontWeights: IFontWeights;
  borderRadius: IBorderRadius;
  animations: IAnimations;
}

interface IColors {
  white: string;
  black: string;
  purple: string;
}

interface IFonts {
  primary: string;
  secondaty: string;
}

interface IFontSizes {
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
  easeInfinite: string;
  easeInOut: string;
}
