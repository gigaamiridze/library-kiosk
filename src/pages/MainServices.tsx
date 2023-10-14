import { useNavigate } from 'react-router-dom';
import { Heading, ServiceCard } from '../components';
import { PageRoutes } from '../constants';
import { FlexBox } from '../styles';
import { images } from '../assets';

function MainServices() {
  const navigate = useNavigate();

  return (
    <FlexBox as='section' flexDirection='column' rowGap={80}>
      <FlexBox flexDirection='column' rowGap={20}>
        <Heading 
          title='All Your Favorite Books In One Place 📚'
          type='h4'
          fontWeight='600'
          textAlign='center'
          lineHeight={24}
        />
        <Heading 
          title='Largest Digital Library Of Bestselling eBooks'
          type='h1'
          fontFamily='secondary'
          fontWeight='500'
          textAlign='center'
          lineHeight={86}
        />
      </FlexBox>
      <FlexBox flexDirection='column' rowGap={40}>
        <Heading 
          title='Main Services'
          type='h2'
          fontFamily='secondary'
          fontWeight='500'
          lineHeight={65}
        />
        <FlexBox alignItems='center' justifyContent='space-between' columnGap={30}>
          <ServiceCard 
            image={images.borrowBook}
            headingTitle='Explore, borrow, enjoy. Dive into a world of stories with our easy book borrowing service.'
            buttonTitle='Borrow a Book'
            handleClick={() => navigate(PageRoutes.BOOK_CATEGORIES)}
          />
          <ServiceCard 
            image={images.returnBook}
            headingTitle='Complete the journey. Return your borrowed books hassle-free and share the reading joy.'
            buttonTitle='Return a Book'
            handleClick={() => navigate('')}
          />
        </FlexBox>
      </FlexBox>
    </FlexBox>
  )
}

export default MainServices;
