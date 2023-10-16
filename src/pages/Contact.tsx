import { Link } from 'react-router-dom';
import { FlexBox, GrayBlock } from '../styles';
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
    </FlexBox>
  )
}

export default Contact;
