import styled, { css } from 'styled-components';

const BackDropStyled = styled.div<{ isOpen: boolean }>`
  ${({ theme, isOpen }) => css`
    background-color: ${theme.colors.backdrop};
    visibility: ${isOpen ? 'visible' : 'hidden'};
    opacity: ${isOpen ? 1 : 0};
    transition: ${theme.animations.easeInOut};
  `}
  position: fixed;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  backdrop-filter: blur(7px);
  z-index: 10;
`;

export default BackDropStyled;
