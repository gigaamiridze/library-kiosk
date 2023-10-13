import styled, { css } from 'styled-components';
import { IButtonProps } from '../../../interfaces';

const Button = styled.button<IButtonProps>`
  ${({ theme, backgroundColor, titleColor }) => css`
    background-color: ${backgroundColor ? theme.colors[backgroundColor] : 'transparent'};
    color: ${titleColor ? theme.colors[titleColor] : theme.colors.purple};
    font-family: ${theme.fonts.primary};
    font-size: ${theme.fontSizes.regular};
    font-weight: ${theme.fontWeights.medium};
    border: 1px solid ${theme.colors.purple};
    border-radius: ${theme.borderRadius.medium};
    transition: ${theme.animations.easeInOut};
  `}
  padding: 12px;
  cursor: pointer;

  &:hover {
    ${({ theme, hoverBgColor, hoverTitleColor }) => css`
      background-color: ${hoverBgColor ? theme.colors[hoverBgColor] : theme.colors.purple};
      color: ${hoverTitleColor ? theme.colors[hoverTitleColor] : theme.colors.white};
    `}
  }
`;

export default Button;