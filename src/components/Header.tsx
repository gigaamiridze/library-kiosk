import { Link } from 'react-router-dom';
import { HeaderContainer, Container, FlexBox, Button } from '../styles';
import { PageRoutes } from '../constants';
import { Heading } from '../components';
import { images } from '../assets';

function Header() {
  return (
    <HeaderContainer >
      <Container>
        <FlexBox alignItems='center' justifyContent='space-between'>
          <Link to={PageRoutes.MAIN_SERVICES}>
            <img src={images.logo} alt='EleBooks Logo' />
          </Link>
          <nav>
            <FlexBox as='ul' alignItems='center' columnGap={30}>
              <li>
                <Link to={PageRoutes.MAIN_SERVICES}>
                  <Heading 
                    title='Main Services'
                    type='h5'
                    fontWeight='500'
                    hoverColor='purple'
                    lineHeight={24}
                  />
                </Link>
              </li>
              <li>
                <Link to={PageRoutes.BOOK_CATEGORIES}>
                  <Heading 
                    title='Book Categories'
                    type='h5'
                    fontWeight='500'
                    hoverColor='purple'
                    lineHeight={24}
                  />
                </Link>
              </li>
            </FlexBox>
          </nav>
          <Link to={''}>
            <Button type='button'>Contact Now</Button>
          </Link>
        </FlexBox>
      </Container>
    </HeaderContainer>
  )
}

export default Header;
