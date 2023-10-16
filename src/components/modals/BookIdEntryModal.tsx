import { useState, FormEvent } from 'react';
import { fadeIn, removeWhitespaces, showErrorMessage, showSuccessMessage } from '../../utils';
import { Heading, Input, ButtonWithSpinner } from '../../components';
import { useLibraryContext, useUserContext } from '../../contexts';
import { ModalContainer, FlexBox, Button } from '../../styles';
import { IBookIdEntryModalProps } from '../../interfaces';

function BookIdEntryModal({ onClose, onConfirm }: IBookIdEntryModalProps) {
  const [bookId, setBookId] = useState<string>('');
  const [disabled, setDisabled] = useState<boolean>(false);
  const { libraryState } = useLibraryContext();
  const { userState } = useUserContext();

  const handleConfirm = (event: FormEvent) => {
    event.preventDefault();

    if (!bookId) {
      return showErrorMessage('Book ID field is required');
    }

    if (bookId === libraryState.selectedBook?.id) {
      setDisabled(true);
      showSuccessMessage('Book ID is correct. thank you!');

      const timeoutId = setTimeout(() => {
        onConfirm();
      }, 2000);

      return () => clearTimeout(timeoutId);
    } else {
      showErrorMessage('Invalid Book ID. Please check and try again');
    }
  }

  return (
    <ModalContainer
      variants={fadeIn('down', 150, 0.3)}
      initial='hidden'
      animate='visible'
      exit='hidden'
    >
      <Heading
        title='Return a book'
        type='h3'
        fontWeight='700'
        textAlign='center'
      />
      <form onSubmit={handleConfirm}>
        <FlexBox flexDirection='column' rowGap={30}>
          <Input 
            type='text'
            placeholder='Enter Book ID'
            iconType='bookId'
            autoComplete='off'
            onChange={(value) => setBookId(removeWhitespaces(value))}
          />
          <FlexBox alignItems='center' columnGap={20}>
            <ButtonWithSpinner 
              title='Confirm'
              disabled={disabled}
              onClick={handleConfirm}
            />
            <Button 
              backgroundColor='purple'
              titleColor='white'
              hoverBgColor='white'
              hoverTitleColor='purple'
              padding={10}
              onClick={onClose}
            >
              Cancel
            </Button>  
          </FlexBox>
        </FlexBox>
      </form>
    </ModalContainer>
  )
}

export default BookIdEntryModal;
