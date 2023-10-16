import { useState } from 'react';
import { Heading, Input, ButtonWithSpinner } from '../../components';
import { ModalContainer, FlexBox, Button } from '../../styles';
import { fadeIn, removeWhitespaces } from '../../utils';
import { IBookIdEntryModalProps } from '../../interfaces';

function BookIdEntryModal({ onClose, onConfirm }: IBookIdEntryModalProps) {
  const [bookId, setBookId] = useState<string>('');
  const [disabled, setDisabled] = useState<boolean>(false);

  const handleConfirm = () => {}

  return (
    <ModalContainer
      variants={fadeIn('down', 150, 0.3)}
      initial='hidden'
      animate='visible'
      exit='hidden'
    >
      <Heading
        title='Return book'
        type='h3'
        fontWeight='700'
        textAlign='center'
      />
      <form>
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
