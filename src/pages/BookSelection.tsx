import { useQuery } from 'react-query';
import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams, Link } from 'react-router-dom';
import { Heading, Pagination, BookCard, LoginModal, BackDrop, ConfirmationModal, ButtonWithSpinner } from '../components';
import { Container, FlexBox, GrayBlock, SpinnerLoader } from '../styles';
import { useLibraryContext, useUserContext } from '../contexts';
import { PageRoutes, LibraryActions } from '../constants';
import { getBooksByCategory } from '../services';
import { showWarningMessage } from '../utils';

function BookSelection() {
  const navigate = useNavigate();
  const { userState } = useUserContext();
  const { libraryState, dispatchLibrary } = useLibraryContext();
  const [isLoginModalOpen, setLoginModalOpen] = useState<boolean>(false);
  const [isConfirmationModalOpen, setConfirmationModalOpen] = useState<boolean>(false);
  const [disabled, setDisabled] = useState<boolean>(false);
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
    keepPreviousData: true,
    staleTime: 300000, // 5 minutes in milliseconds
    cacheTime: 3600000, // 1 hour in milliseconds
  });

  const handleBookSelection = (newBook: string) => {
    dispatchLibrary({ type: LibraryActions.SELECT_BOOK, payload: newBook });
  };

  const checkBookAndShowModal = () => {
    if (libraryState.selectedBook) {
      setDisabled(true);

      const timeoutId = setTimeout(() => {
        if (userState.isAuthenticated) {
          setConfirmationModalOpen(true);
          setDisabled(false);
        } else {
          setLoginModalOpen(true);
          setDisabled(false);
        }
      }, 3000);

      return () => clearTimeout(timeoutId);
    } else {
      showWarningMessage('Please select a book');
    }
  }

  const handleConfirmationModalClose = () => {
    const timeoutId = setTimeout(() => {
      setConfirmationModalOpen(false);
      navigate(PageRoutes.MAIN_SERVICES);
    }, 2000);

    return () => clearTimeout(timeoutId);
  }

  return (
    <FlexBox as='section' flexDirection='column' rowGap={60}>
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
              <Container>
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
                        image={volumeInfo.imageLinks ? volumeInfo.imageLinks.smallThumbnail : undefined}
                        rating={volumeInfo.averageRating}
                        authors={volumeInfo.authors}
                        isSelected={libraryState.selectedBook === volumeInfo.title}
                        onClick={() => handleBookSelection(volumeInfo.title)}
                      />
                    )
                  })}
                </FlexBox>
              </Container>
            )}
            <FlexBox alignItems='center' columnGap={30}>
              <Pagination
                data={books}
                currentPage={page}
                setcurrentPage={setPage}
                isPreviousData={isPreviousData}
                isFetching={isFetching}
              />
              <ButtonWithSpinner 
                title='Select'
                disabled={disabled} 
                onClick={checkBookAndShowModal}
              />
            </FlexBox>
          </FlexBox>
        </FlexBox>
      </Container>
      <BackDrop 
        isOpen={isLoginModalOpen || isConfirmationModalOpen}
        onClose={() => {
          setLoginModalOpen(false);
          setConfirmationModalOpen(false);
        }}
      >
        {isLoginModalOpen && (
          <LoginModal 
            onClose={() => setLoginModalOpen(false)} 
            onSuccess={() => setConfirmationModalOpen(true)}
          />
        )}
        {isConfirmationModalOpen && <ConfirmationModal onClose={handleConfirmationModalClose} />}
      </BackDrop>
    </FlexBox>
  )
}

export default BookSelection;
