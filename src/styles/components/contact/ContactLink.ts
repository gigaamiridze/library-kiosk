import styled, { css } from 'styled-components';

const ContactLink = styled.a`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    font-family: ${theme.fonts.secondary};
    font-size: ${theme.fontSizes.large};
    font-weight: ${theme.fontWeights.medium};
    transition: ${theme.animations.easeInOut};
  `}

  &:hover {
    color: ${({ theme }) => theme.colors.purple};
  }
`;

export default ContactLink;
