import styled, { css } from 'styled-components';

export const FieldGroup = styled.div`
  width: 100%;
  height: 50px;
  position: relative;
  box-shadow: 0px 10px 30px 0px rgba(168.99, 166.99, 188.99, 0.25);
`;

export const InputStyled = styled.input`
  ${({ theme }) => css`
    color: ${theme.colors.cadetBlue};
    font-family: ${theme.fonts.primary};
    font-size: ${theme.fontSizes.small};
    border: 1px solid ${theme.colors.cadetBlue};
    border-radius: ${theme.borderRadius.regular};
    transition: ${theme.animations.easeInOut};
  `}
  width: 100%;
  height: 100%;
  background: transparent;
  padding-left: 50px;
  padding-right: 16px;
  outline: none;

  &::placeholder {
    ${({ theme }) => css`
      color: ${theme.colors.cadetBlue};
    `}
  }

  &:hover, &:focus {
    border-color: ${({ theme }) => theme.colors.purple};
  }
`;

export const InputIcon = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 50px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    ${({ theme }) => css`
      color: ${theme.colors.cadetBlue};
      font-size: ${theme.fontSizes.medium};
    `}
  }
`;
