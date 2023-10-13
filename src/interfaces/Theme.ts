export interface ITheme {
  colors: IColors;
  fonts: IFonts;
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

interface IAnimations {
  easeInfinite: string;
}
