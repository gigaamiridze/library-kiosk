import styled, { css } from 'styled-components';

const ModalContainer = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    border-radius: ${theme.borderRadius.xLarge};
  `}
  width: 50%;
  margin: 10% auto;
  padding: 30px;
`;

export default ModalContainer;
