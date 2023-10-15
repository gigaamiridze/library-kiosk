import styled, { css } from 'styled-components';
import { IButtonProps } from '../../../interfaces';

const Button = styled.button<IButtonProps>`
  ${({ theme, backgroundColor, titleColor, isSelected, padding }) => css`
    background-color: ${backgroundColor ? theme.colors[backgroundColor] : 'transparent'};
    color: ${titleColor ? theme.colors[titleColor] : theme.colors.purple};
    background-color: ${isSelected && theme.colors.purple};
    color: ${isSelected && theme.colors.white};
    font-family: ${theme.fonts.primary};
    font-size: ${theme.fontSizes.small};
    font-weight: ${theme.fontWeights.medium};
    border: 1px solid ${theme.colors.purple};
    border-radius: ${theme.borderRadius.medium};
    padding: ${padding ? padding : 12}px;
    transition: ${theme.animations.easeInOut};
  `}
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 8px;
  cursor: pointer;

  &:hover {
    ${({ theme, hoverBgColor, hoverTitleColor }) => css`
      background-color: ${hoverBgColor ? theme.colors[hoverBgColor] : theme.colors.purple};
      color: ${hoverTitleColor ? theme.colors[hoverTitleColor] : theme.colors.white};
    `}
  }

  &:disabled {
    ${({ theme }) => css`
      background-color: ${theme.colors.white};
      border-color: ${theme.colors.gainsboro};
      color: ${theme.colors.gainsboro};
    `}
    cursor: not-allowed;
  }
`;

export default Button;
