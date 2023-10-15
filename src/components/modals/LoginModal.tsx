import { useState, FormEvent } from 'react';
import { showErrorMessage, removeWhitespaces } from '../../utils';
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

  console.log(username, username.length);

  const handleLogin = (event: FormEvent) => {
    event.preventDefault();

    if (!username || !email || !password) {
      return showErrorMessage('All fields are required');
    }

    if (username.length < 4 || username.length > 20) {
      return showErrorMessage('Username must be between 4 and 20 characters');
    }

    if (password.length < 8 || password.length > 20) {
      return showErrorMessage('Password must be between 8 and 20 characters');
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return showErrorMessage('Invalid email format');
    }
    
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
      <form onSubmit={handleLogin}>
        <FlexBox flexDirection='column' rowGap={30}>
          <FlexBox flexDirection='column' rowGap={20}>
            <Input 
              type='text'
              placeholder='Enter your username'
              iconType='username'
              autoComplete='off'
              onChange={(value) => setUsername(removeWhitespaces(value))}
            />
            <Input 
              type='email'
              placeholder='Enter your email'
              iconType='email'
              autoComplete='off'
              onChange={(value) => setEmail(removeWhitespaces(value))}
            />
            <Input 
              type='password'
              placeholder='Enter your password'
              iconType='password'
              autoComplete='off'
              onChange={(value) => setPassword(removeWhitespaces(value))}
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
        </FlexBox>
      </form>
    </ModalContainer>
  )
}

export default LoginModal;
