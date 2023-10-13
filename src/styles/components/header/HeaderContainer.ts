import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: ${({ theme }) => theme.colors.flashWhite};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gainsboro};
  padding: 15px 0;
`;

export default HeaderContainer;
