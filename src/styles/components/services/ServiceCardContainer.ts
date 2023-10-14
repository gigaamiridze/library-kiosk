import styled, { css } from 'styled-components';
import FlexBox from '../shared/FlexBox';

const ServiceCardContainer = styled(FlexBox)`
  ${({ theme }) => css`
    border: 1px solid ${theme.colors.gainsboro};
    border-radius: ${theme.borderRadius.xLarge};
  `}
  width: 50%;
  padding: 30px;

  img {
    width: 100%;
    max-height: 400px;
    object-fit: cover;
    border-radius: ${({ theme }) => theme.borderRadius.medium};
  }
`;

export default ServiceCardContainer;
