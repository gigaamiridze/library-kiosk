import { useEffect } from 'react';
import { useNavigate, useSearchParams, Link } from 'react-router-dom';
import { useLibraryContext } from '../contexts';
import { FlexBox, GrayBlock } from '../styles';
import { PageRoutes } from '../constants';
import { Heading } from '../components';

function BookSelection() {
  const navigate = useNavigate();
  const { libraryState } = useLibraryContext();
  const [searchParams] = useSearchParams();
  const category = searchParams.get('category');

  useEffect(() => {
    if (!libraryState.selectedCategory) {
      navigate(PageRoutes.BOOK_CATEGORIES);
    }
  }, []);

  return (
    <FlexBox as='section' flexDirection='column' rowGap={80}>
      <GrayBlock flexDirection='column' alignItems='center' rowGap={20}>
        <Heading
          title='Explore your favorite books 📚'
          type='h4'
          fontWeight='600'
          textAlign='center'
          lineHeight={24}
        />
        <Heading
          title='Selection'
          type='h1'
          fontFamily='secondary'
          fontWeight='500'
          textAlign='center'
          lineHeight={86}
        />
        <Link to={PageRoutes.BOOK_CATEGORIES} style={{ marginTop: 15 }}>
          <Heading
            title='Back To Category Page'
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

export default BookSelection;
