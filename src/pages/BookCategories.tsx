import { Heading } from '../components';
import { FlexBox } from '../styles';

function BookCategories() {
  return (
    <FlexBox as='section' flexDirection='column' rowGap={80}>
      <FlexBox flexDirection='column' rowGap={20}>
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
      </FlexBox>
    </FlexBox>
  )
}

export default BookCategories;

import styled from 'styled-components';

const BookCategoriesContainer = styled.section`

`;
