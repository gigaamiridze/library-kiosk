import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Heading, ServiceCard, BackDrop, BookIdEntryModal, LoginModal, ConfirmationModal } from '../components';
import { PageRoutes, LibraryActions } from '../constants';
import { Container, FlexBox, GrayBlock } from '../styles';
import { useLibraryContext } from '../contexts';
import { showInfoMessage } from '../utils';
import { images } from '../assets';

function MainServices() {
  const navigate = useNavigate();
  const [isLoginModalOpen, setLoginModalOpen] = useState<boolean>(false);
  const [isBookIdModalOpen, setBookIdModalOpen] = useState<boolean>(false);
  const [isConfirmationModalOpen, setConfirmationModalOpen] = useState<boolean>(false);
  const { libraryState, dispatchLibrary } = useLibraryContext();

  const handleConfirmationModalConfirm = () => {
    dispatchLibrary({ type: LibraryActions.RETURN_SUCCESS });

    const timeoutId = setTimeout(() => {
      setConfirmationModalOpen(false);
      navigate(PageRoutes.BOOK_CATEGORIES);
    }, 2000);

    return () => clearTimeout(timeoutId);
  }

  const handleReturnBookButtonClick = () => {
    if (!libraryState.selectedBook?.id) {
      showInfoMessage("You haven't borrowed a book yet, please borrow a book.");
    } else {
      setBookIdModalOpen(true);
    }
  }

  const handleBackDropClose = () => {
    setLoginModalOpen(false);
    setBookIdModalOpen(false);
    setConfirmationModalOpen(false);
  }
  
  return (
    <FlexBox as='section' flexDirection='column' rowGap={80}>
      <GrayBlock flexDirection='column' rowGap={20}>
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
      </GrayBlock>
      <Container>
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
              onClick={() => navigate(PageRoutes.BOOK_CATEGORIES)}
            />
            <ServiceCard
              image={images.returnBook}
              headingTitle='Complete the journey. Return your borrowed books hassle-free and share the reading joy.'
              buttonTitle='Return a Book'
              onClick={handleReturnBookButtonClick}
            />
          </FlexBox>
        </FlexBox>
      </Container>
      <BackDrop
        isOpen={isBookIdModalOpen || isLoginModalOpen || isConfirmationModalOpen}
        onClose={handleBackDropClose}
      >
        {isBookIdModalOpen && (
          <BookIdEntryModal 
            onClose={() => setBookIdModalOpen(false)} 
            onConfirm={() => {
              setBookIdModalOpen(false);
              setLoginModalOpen(true);
            }}
          />
        )}
        {isLoginModalOpen && (
          <LoginModal
            onClose={() => setLoginModalOpen(false)}
            onSuccess={() => setConfirmationModalOpen(true)}
          />
        )}
        {isConfirmationModalOpen && (
          <ConfirmationModal 
            type='return'
            onConfirm={handleConfirmationModalConfirm} 
          />
        )}
      </BackDrop>
    </FlexBox>
  )
}

export default MainServices;
