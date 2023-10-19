import styled, { css } from 'styled-components';

const ContactTitle = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    font-family: ${theme.fonts.secondary};
    font-weight: ${theme.fontWeights.medium};
  `}
  font-size: 50px;
`;

export default ContactTitle;
