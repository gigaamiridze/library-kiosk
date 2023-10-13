import styled, { css } from 'styled-components';
import { IFlexBoxProps } from '../../../interfaces';

const FlexBox = styled.div<IFlexBoxProps>`
  display: flex;
  ${({ flexDirection, alignItems, justifyContent, gap, rowGap, columnGap }) => css`
    flex-direction: ${flexDirection && 'row'};
    align-items: ${alignItems && 'stretch'};
    justify-content: ${justifyContent && 'flex-start'};
    gap: ${gap ? `${gap}px` : 0};
    row-gap: ${rowGap ? `${rowGap}px` : 0};
    column-gap: ${columnGap ? `${columnGap}px` : 0};
  `}
`;

export default FlexBox;
