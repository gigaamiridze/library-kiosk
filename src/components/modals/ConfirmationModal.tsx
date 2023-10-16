import { useState } from 'react';
import { ModalContainer, Button, SpinnerLoader } from '../../styles';
import { IModalProps } from '../../interfaces';
import { Heading } from '../../components';

function ConfirmationModal({ onClose }: IModalProps) {
  const [disabled, setDisabled] = useState<boolean>(false);
  
  return (
    <ModalContainer flexDirection='column' rowGap={30}>
      <Heading
        title='Book Borrowed Successfully!'
        type='h3'
        fontWeight='700'
        textAlign='center'
      />
      <Button
        padding={10}
        disabled={disabled}
        onClick={() => {
          setDisabled(true);
          onClose();
        }}
      >
        OK
        {disabled && (
          <SpinnerLoader size={19} color='gainsboro' />
        )}
      </Button>
    </ModalContainer>
  )
}

export default ConfirmationModal;
