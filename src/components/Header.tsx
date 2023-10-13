import { HeaderContainer, Container, FlexBox } from '../styles';
import { logo } from '../assets';

function Header() {
  return (
    <HeaderContainer >
      <Container>
        <FlexBox alignItems='center' justifyContent='space-between'>
          <img src={logo} alt='EleBooks Logo' />
        </FlexBox>
      </Container>
    </HeaderContainer>
  )
}

export default Header;
