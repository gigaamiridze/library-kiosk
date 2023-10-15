import { useState } from 'react';
import { ModalContainer, FlexBox, Button } from '../../styles';
import { Heading, Input } from '../../components';
import { useUserContext } from '../../contexts';
import { IModalProps } from '../../interfaces';
import { UserActions } from '../../constants';

function LoginModal({ onClose }: IModalProps) {
  const { userState, dispatchUser } = useUserContext();
  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLogin = () => {
    dispatchUser({ type: UserActions.LOGIN_SUCCESS, payload: { username, email } });
    onClose();
  }
  
  return (
    <ModalContainer flexDirection='column' rowGap={30}>
      <Heading 
        title='Login to your account'
        type='h3'
        fontWeight='700'
        textAlign='center'
      />
      <FlexBox flexDirection='column' rowGap={20}>
        <Input 
          type='text'
          placeholder='Enter your username'
          iconType='username'
          autoComplete='off'
          onChange={(value) => setUsername(value)}
        />
        <Input 
          type='email'
          placeholder='Enter your email'
          iconType='email'
          autoComplete='off'
          onChange={(value) => setEmail(value)}
        />
        <Input 
          type='password'
          placeholder='Enter your password'
          iconType='password'
          autoComplete='off'
          onChange={(value) => setPassword(value)}
        />
      </FlexBox>
      <FlexBox alignItems='center' columnGap={20}>
        <Button 
          padding={10}
          onClick={handleLogin}
        >
          Login  
        </Button>
        <Button 
          padding={10}
          onClick={onClose}
        >
          Cancel
        </Button>  
      </FlexBox>
    </ModalContainer>
  )
}

export default LoginModal;
