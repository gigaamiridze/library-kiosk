import { Link } from 'react-router-dom';
import { FlexBox, GrayBlock, Container, ContactLink } from '../styles';
import { fadeInOut } from '../animations';
import { PageRoutes } from '../constants';
import { Heading } from '../components';

function Contact() {
  return (
    <FlexBox
      flexDirection='column'
      rowGap={60}
      variants={fadeInOut}
      initial='initial'
      animate='animate'
      exit='exit'
    >
      <GrayBlock flexDirection='column' alignItems='center' rowGap={20}>
        <Heading
          title='All Your Favorite Books In One Place 📚'
          type='h4'
          fontWeight='600'
          textAlign='center'
          lineHeight={24}
        />
        <Heading
          title='Contact Now'
          type='h1'
          fontFamily='secondary'
          fontWeight='500'
          textAlign='center'
          lineHeight={86}
        />
        <Link to={PageRoutes.MAIN_SERVICES} style={{ marginTop: 15 }}>
          <Heading
            title='Back To Home'
            type='h5'
            color='purple'
            fontWeight='500'
            textAlign='center'
            lineHeight={24}
          />
        </Link>
      </GrayBlock>
      <Container>
        <FlexBox alignItems='center' justifyContent='space-between'>
          <FlexBox flexDirection='column' rowGap={15}>
            <Heading 
              title='Contact Us'
              type='h2'
              fontFamily='secondary'
              fontWeight='500'
            />
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
        </FlexBox>
      </Container>
    </FlexBox>
  )
}

export default Contact;
