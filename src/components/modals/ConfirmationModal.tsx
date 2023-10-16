import { useState } from 'react';
import { Heading, ButtonWithSpinner } from '../../components';
import { IModalProps } from '../../interfaces';
import { ModalContainer } from '../../styles';
import { fadeIn } from '../../utils';

function ConfirmationModal({ onClose }: IModalProps) {
  const [disabled, setDisabled] = useState<boolean>(false);
  
  return (
    <ModalContainer
      variants={fadeIn('down', 150, 0.3)}
      initial='hidden'
      animate='visible'
      exit='hidden'
    >
      <Heading
        title='Book Borrowed Successfully!'
        type='h3'
        fontWeight='700'
        textAlign='center'
      />
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
