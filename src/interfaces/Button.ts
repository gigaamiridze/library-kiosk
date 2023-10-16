import { IColors } from './Theme';

export interface IButtonProps {
  backgroundColor?: keyof IColors;
  titleColor?: keyof IColors;
  hoverBgColor?: keyof IColors;
  hoverTitleColor?: keyof IColors;
  isSelected?: boolean;
  padding?: number; 
}

export interface IButtonWithSpinnerProps {
  title: string;
  disabled: boolean;
  onClick: (param?: any) => void;
}
