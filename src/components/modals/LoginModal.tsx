import { useState } from 'react';
import { useUserContext } from '../../contexts';
import { IModalProps } from '../../interfaces';
import { UserActions } from '../../constants';
import { ModalContainer } from '../../styles';

function LoginModal({ onClose }: IModalProps) {
  const { userState, dispatchUser } = useUserContext();
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLogin = () => {
    dispatchUser({ type: UserActions.LOGIN_SUCCESS, payload: username });
    onClose();
  }

  return (
    <ModalContainer>
      Login Modal
    </ModalContainer>
  )
}

export default LoginModal;
