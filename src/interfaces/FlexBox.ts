type FlexDirectionType = 'row' | 'row-reverse' | 'column' | 'column-reverse' | 'initial' | 'inherit';
type AlignItemsType = 'stretch' | 'center' | 'baseline' | 'start' | 'end' | 'flex-start' | 'flex-end' | 'initial' | 'inherit';
type JustifyContentType = 'center' | 'flex-start' | 'flex-end' | 'start' | 'end' | 'space-between' | 'space-around' | 'space-evenly' | 'initial' | 'inherit';

export interface IFlexBoxProps {
  flexDirection?: FlexDirectionType;
  alignItems?: AlignItemsType;
  justifyContent?: JustifyContentType;
  gap?: number | 'normal' | 'initial' | 'inherit';
  rowGap?: number | 'normal' | 'initial' | 'inherit';
  columnGap?: number | 'normal' | 'initial' | 'inherit';
}
