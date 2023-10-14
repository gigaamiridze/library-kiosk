import styled, { css } from 'styled-components';
import keyframes from '../../keyframes';
import { ISpinnerLoaderProps } from '../../../interfaces';

const SpinnerLoader = styled.div<ISpinnerLoaderProps>`
  ${({ theme, size }) => css`
    width: ${size ? size : 48}px;
    height: ${size ? size : 48}px;
    border-top: 3px solid ${theme.colors.purple};
    border-radius: ${theme.borderRadius.circle};
    animation: ${keyframes.rotation} ${theme.animations.linearInfinite};
  `}
  border-right: 3px solid transparent;
`;

export default SpinnerLoader;
