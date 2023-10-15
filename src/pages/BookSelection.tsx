import { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import { useNavigate, useSearchParams, Link } from 'react-router-dom';
import { Container, FlexBox, GrayBlock, SpinnerLoader, Button } from '../styles';
import { PageRoutes, LibraryActions } from '../constants';
import { Heading, Pagination, BookCard } from '../components';
import { getBooksByCategory } from '../services';
import { useLibraryContext } from '../contexts';
import { showInfoMessage } from '../utils';

function BookSelection() {
  const navigate = useNavigate();
  const { libraryState, dispatchLibrary } = useLibraryContext();
  const [page, setPage] = useState<number>(0);
  const [searchParams] = useSearchParams();
  const category = searchParams.get('category');

  useEffect(() => {
    if (!libraryState.selectedCategory) {
      navigate(PageRoutes.BOOK_CATEGORIES);
    }
  }, []);

  const {
    data: books,
    isLoading,
    isError,
    isFetching,
    isPreviousData,
  } = useQuery(['books', page], () => getBooksByCategory(page, 8, category), {
    keepPreviousData: true
  });

  const handleBookChange = (newBook: string) => {
    dispatchLibrary({ type: LibraryActions.SELECT_BOOK, payload: newBook });
  };

  const handleNavigate = () => {
    if (libraryState.selectedBook) {
      // TODO
    } else {
      showInfoMessage('Please select a book');
    }
  };

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
      <Container>
        <FlexBox flexDirection='column' rowGap={50}>
          <Heading
            title='Select a book'
            type='h2'
            fontFamily='secondary'
            fontWeight='500'
            lineHeight={65}
          />
          <FlexBox
            flexDirection='column'
            alignItems='center'
            justifyContent='center'
            rowGap={40}
          >
            {isLoading || isFetching ? (
              <SpinnerLoader />
            ) : isError ? (
              <Heading
                title='Something went wrong. Please try again.'
                type='h5'
                fontWeight='500'
              />
            ) : (
              <FlexBox
                alignItems='flex-start'
                justifyContent='space-between'
                flexWrap='wrap'
                columnGap={20}
                rowGap={20}
              >
                {books?.map((book) => {
                  const { volumeInfo } = book;

                  return (
                    <BookCard
                      key={book.id}
                      title={volumeInfo.title}
                      image={volumeInfo.imageLinks.thumbnail}
                      rating={volumeInfo.averageRating}
                      author={volumeInfo.authors[0]}
                      isSelected={libraryState.selectedBook === volumeInfo.title}
                      handleClick={() => handleBookChange(volumeInfo.title)}
                    />
                  )
                })}
              </FlexBox>
            )}
            <FlexBox alignItems='center' columnGap={30}>
              <Pagination
                data={books}
                currentPage={page}
                setcurrentPage={setPage}
                isPreviousData={isPreviousData}
                isFetching={isFetching}
              />
              <Button
                backgroundColor='purple'
                titleColor='white'
                hoverBgColor='white'
                hoverTitleColor='purple'
                padding={10}
                onClick={handleNavigate}
              >
                Select
              </Button>
            </FlexBox>
          </FlexBox>
        </FlexBox>
      </Container>
    </FlexBox>
  )
}

export default BookSelection;
