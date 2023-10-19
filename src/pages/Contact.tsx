import { useNavigate } from 'react-router-dom';
import { FaLinkedinIn, FaTwitter, FaFacebookF, FaInstagram  } from 'react-icons/fa';
import { FlexBox, Container, ContactLink, ContactTitle, Button } from '../styles';
import { Heading, WelcomeSection } from '../components';
import { PageRoutes } from '../constants';
import { fadeInOut } from '../animations';

function Contact() {
  const navigate = useNavigate();

  return (
    <FlexBox
      flexDirection='column'
      rowGap={60}
      variants={fadeInOut}
      initial='initial'
      animate='animate'
      exit='exit'
    >
      <WelcomeSection
        smallTitle='All Your Favorite Books In One Place'
        bigTitle='Contact Now'
        backTitle='Back To Home'
        onBack={() => navigate(PageRoutes.MAIN_SERVICES)}
      />
      <Container>
        <FlexBox alignItems='flex-start' justifyContent='space-around'>
          <FlexBox flexDirection='column' rowGap={15}>
            <ContactTitle>Contact Us</ContactTitle>
            <FlexBox flexDirection='column' rowGap={10}>
              <FlexBox alignItems='center' columnGap={5}>
                <Heading 
                  title='Phone:'
                  type='h3'
                  fontFamily='secondary'
                  fontWeight='500'
                />
                <ContactLink href='tel:+995-555-77-55-77'>+995 555 77 55 77</ContactLink>
              </FlexBox>
              <FlexBox alignItems='center' columnGap={5}>
                <Heading 
                  title='E-mail:'
                  type='h3'
                  fontFamily='secondary'
                  fontWeight='500'
                />
                <ContactLink href='mailto:contact.books@gmail.com'>contact.books@gmail.com</ContactLink>
              </FlexBox>
              <Heading 
                title='Address: Georgia, Tbilisi'
                type='h3'
                fontFamily='secondary'
                fontWeight='500'
              />
            </FlexBox>
          </FlexBox>
          <FlexBox flexDirection='column' rowGap={15}>
            <ContactTitle>Follow Us</ContactTitle>
            <FlexBox alignItems='center' columnGap={10}>
              <a href='https://linkedin.com/' target='_blank'>
                <Button>
                  <FaLinkedinIn />
                </Button>
              </a>
              <a href='https://twitter.com/' target='_blank'>
                <Button>
                  <FaTwitter />
                </Button>
              </a>
              <a href='https://facebook.com/' target='_blank'>
                <Button>
                  <FaFacebookF />
                </Button>
              </a>
              <a href='https://instagram.com/' target='_blank'>
                <Button>
                  <FaInstagram />
                </Button>
              </a>
            </FlexBox>
          </FlexBox>
        </FlexBox>
      </Container>
    </FlexBox>
  )
}

export default Contact;
