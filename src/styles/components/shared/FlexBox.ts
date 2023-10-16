import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';
import { IFlexBoxProps } from '../../../interfaces';

const FlexBox = styled(motion.div)<IFlexBoxProps>`
  display: flex;
  ${({ flexDirection, alignItems, justifyContent, flexWrap, gap, rowGap, columnGap }) => css`
    flex-direction: ${flexDirection || 'row'};
    align-items: ${alignItems || 'stretch'};
    justify-content: ${justifyContent || 'flex-start'};
    flex-wrap: ${flexWrap || 'nowrap'};
    gap: ${gap ? `${gap}px` : 0};
    row-gap: ${rowGap ? `${rowGap}px` : 0};
    column-gap: ${columnGap ? `${columnGap}px` : 0};
  `}
`;

export default FlexBox;
