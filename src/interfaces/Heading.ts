import { IColors, IFonts } from './Theme';

export type HeadingType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export interface IHeadingStyledProps {
  type: HeadingType;
  color?: keyof IColors;
  hoverColor?: keyof IColors;
  fontFamily?: keyof IFonts; 
  fontWeight?: '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900' | 'lighter' | 'normal' | 'bold' | 'bolder';
  lineHeight?: number | 'normal' | 'initial' | 'inherit';
  letterSpacing?: number | 'normal' | 'initial' | 'inherit';
  textAlign?: 'left' | 'right' | 'center' | 'justify' | 'initial' |'inherit';
  textTransform?: 'capitalize' | 'uppercase' | 'lowercase' | 'initial' | 'inherit' | 'none';
  ellipsis?: boolean; 
}

export interface IHeadingProps extends IHeadingStyledProps {
  title: string;
  onClick?: () => void;
}
