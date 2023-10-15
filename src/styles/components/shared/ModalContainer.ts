import styled, { css } from 'styled-components';
import FlexBox from './FlexBox';

const ModalContainer = styled(FlexBox)`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    border-radius: ${theme.borderRadius.xLarge};
  `}
  width: 50%;
  margin: 10% auto;
  padding: 30px;
  box-shadow: 0px 10px 30px 0px rgba(168.99, 166.99, 188.99, 0.25);
`;

export default ModalContainer;
