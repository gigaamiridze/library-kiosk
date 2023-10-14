import { Link } from 'react-router-dom';
import { PageRoutes } from '../constants';
import { Heading } from '../components';
import { FlexBox } from '../styles';

function BookCategories() {
  return (
    <FlexBox as='section' flexDirection='column' rowGap={80}>
      <FlexBox flexDirection='column' alignItems='center' rowGap={20}>
        <Heading 
          title='Explore your favorite book category 📚'
          type='h4'
          fontWeight='600'
          textAlign='center'
          lineHeight={24}
        />
        <Heading 
          title='Categories'
          type='h1'
          fontFamily='secondary'
          fontWeight='500'
          textAlign='center'
          lineHeight={86}
        />
        <Link to={PageRoutes.MAIN_SERVICES} style={{ marginTop: 20 }}>
          <Heading 
            title='Back To Home'
            type='h5'
            color='purple'
            fontWeight='500'
            textAlign='center'
            lineHeight={24}
          />
        </Link>
      </FlexBox>
    </FlexBox>
  )
}

export default BookCategories;
