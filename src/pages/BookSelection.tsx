import { useQuery } from 'react-query';
import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Heading, Pagination, BookCard, LoginModal, BackDrop, ConfirmationModal, ButtonWithSpinner, WelcomeSection } from '../components';
import { useLibraryContext, useUserContext } from '../contexts';
import { Container, FlexBox, SpinnerLoader } from '../styles';
import { PageRoutes, LibraryActions } from '../constants';
import { showWarningMessage } from '../utils';
import { getBooksByCategory } from '../api';
import { fadeInOut } from '../animations';
import { IBook } from '../interfaces';

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

  const handleBookSelection = (book: IBook) => {
    dispatchLibrary({
      type: LibraryActions.SELECT_BOOK, payload: {
        id: book.id,
        title: book.volumeInfo.title,
      }
    });
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
      }, 2000);

      return () => clearTimeout(timeoutId);
    } else {
      showWarningMessage('Please select a book.');
    }
  }

  const handleConfirmationModalConfirm = () => {
    dispatchLibrary({ type: LibraryActions.BORROW_SUCCESS });

    const timeoutId = setTimeout(() => {
      setConfirmationModalOpen(false);
      navigate(PageRoutes.MAIN_SERVICES);
    }, 2000);

    return () => clearTimeout(timeoutId);
  }

  const handleBackDropClose = () => {
    setLoginModalOpen(false);
    setConfirmationModalOpen(false);
  }

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
        smallTitle='Explore your favorite books'
        bigTitle='Selection'
        backTitle='Back To Category Page'
        onBack={() => navigate(PageRoutes.BOOK_CATEGORIES)}
      />
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
                        isSelected={libraryState.selectedBook?.title === volumeInfo.title}
                        onClick={() => handleBookSelection(book)}
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
        onClose={handleBackDropClose}
      >
        {isLoginModalOpen && (
          <LoginModal
            onClose={() => setLoginModalOpen(false)}
            onSuccess={() => setConfirmationModalOpen(true)}
          />
        )}
        {isConfirmationModalOpen && (
          <ConfirmationModal
            type='borrow'
            onConfirm={handleConfirmationModalConfirm}
          />
        )}
      </BackDrop>
    </FlexBox>
  )
}

export default BookSelection;
