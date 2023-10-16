import { FooterContainer, Container, FlexBox } from '../../styles';
import { Heading } from '../../components';
import { images } from '../../assets';

function Footer() {
  return (
    <FooterContainer>
      <Container>
        <FlexBox alignItems='center' justifyContent='space-around'>
          <img src={images.logo1} alt='Logo' />
          <Heading 
            title='© Copyright 2023. Powered by Giga Amiridze.'
            type='h6'
            color='white'
          />
        </FlexBox>
      </Container>
    </FooterContainer>
  )
}

export default Footer;
