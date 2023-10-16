import { useState } from 'react';
import { useLibraryContext, useUserContext } from '../../contexts';
import { Heading, ButtonWithSpinner } from '../../components';
import { ModalContainer, FlexBox } from '../../styles';
import { IModalProps } from '../../interfaces';
import { fadeIn } from '../../utils';

function ConfirmationModal({ onClose }: IModalProps) {
  const [disabled, setDisabled] = useState<boolean>(false);
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
        title='Borrow Confirmation'
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
          title={`Thank you for borrowing the book "${libraryState.selectedBook?.title}". We appreciate your support.`}
          type='h5'
          fontWeight='600'
          lineHeight={22}
        />
        <FlexBox flexDirection='column' rowGap={5}>
          <Heading 
            title='Happy Reading!'
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
          onClose();
        }}
      />
    </ModalContainer>
  )
}

export default ConfirmationModal;
