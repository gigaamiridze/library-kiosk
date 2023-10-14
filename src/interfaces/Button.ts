import { IColors } from './Theme';

export interface IButtonProps {
  backgroundColor?: keyof IColors;
  titleColor?: keyof IColors;
  hoverBgColor?: keyof IColors;
  hoverTitleColor?: keyof IColors;
  padding?: number; 
}
