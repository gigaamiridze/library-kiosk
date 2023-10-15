import styled, { css } from 'styled-components';
import FlexBox from '../shared/FlexBox';

const RatingContainer = styled(FlexBox)`
  svg {
    ${({ theme }) => css`
      color: ${theme.colors.orange};
      font-size: ${theme.fontSizes.large};
    `}
  }
`;

export default RatingContainer;
