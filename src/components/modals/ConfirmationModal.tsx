import { useState } from 'react';
import { useLibraryContext, useUserContext } from '../../contexts';
import { Heading, ButtonWithSpinner } from '../../components';
import { IConfirmationModalProps } from '../../interfaces';
import { ModalContainer, FlexBox } from '../../styles';
import { fadeIn } from '../../utils';

function ConfirmationModal(props: IConfirmationModalProps) {
  const [disabled, setDisabled] = useState<boolean>(false);
  const { type, onConfirm } = props;
  const { libraryState } = useLibraryContext();
  const { userState } = useUserContext();
  
  return (
    <ModalContainer
      variants={fadeIn('down', 200, 0.3)}
      initial='hidden'
      animate='visible'
      exit='hidden'
    >
      <Heading
        title={`${type === 'borrow' ? 'Borrow' : 'Return'} Confirmation`}
        type='h3'
        fontWeight='700'
        textAlign='center'
      />
      <FlexBox flexDirection='column' rowGap={15}>
        <Heading 
          title={`Dear ${userState.username},`}
          type='h5'
          fontWeight='600'
        />
        <Heading 
          title={`Thank you for ${type === 'borrow' ? `borrowing the book "${libraryState.selectedBook?.title}"` : 'returning book'}. Your request has been successfully processed.`}
          type='h5'
          fontWeight='600'
          lineHeight={22}
        />
        <FlexBox flexDirection='column' rowGap={5}>
          <Heading 
            title={`${type === 'borrow' ? 'Happy Reading!' : 'Good Luck!'}`}
            type='h5'
            fontWeight='600'
          />
          <Heading 
            title='Kiosk Library.'
            type='h5'
            fontWeight='600'
          />
        </FlexBox>
      </FlexBox>
      <ButtonWithSpinner 
        title='OK'
        disabled={disabled} 
        onClick={() => {
          setDisabled(true);
          onConfirm();
        }}
      />
    </ModalContainer>
  )
}

export default ConfirmationModal;
