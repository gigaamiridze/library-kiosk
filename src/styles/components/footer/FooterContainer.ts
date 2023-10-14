import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.colors.primary};
  border-top: 1px solid ${({ theme }) => theme.colors.independence};
  margin-top: 80px;
  padding: 30px 0;
`;

export default FooterContainer;
