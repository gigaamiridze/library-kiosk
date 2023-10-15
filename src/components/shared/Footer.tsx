import { FooterContainer, Container, FlexBox } from '../../styles';
import { Heading } from '../../components';

function Footer() {
  return (
    <FooterContainer>
      <Container>
        <FlexBox alignItems='center' justifyContent='center'>
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
