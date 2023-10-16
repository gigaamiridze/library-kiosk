import axios from 'axios';
import { useMutation } from 'react-query';
import { useState, FormEvent } from 'react';
import { showErrorMessage, removeWhitespaces, showSuccessMessage } from '../../utils';
import { Heading, Input, ButtonWithSpinner } from '../../components';
import { ModalContainer, FlexBox, Button } from '../../styles';
import { ILoginModalProps } from '../../interfaces';
import { UserActions, Api } from '../../constants';
import { useUserContext } from '../../contexts';
import { fadeIn } from '../../utils';

function LoginModal({ onClose, onSuccess }: ILoginModalProps) {
  const { dispatchUser } = useUserContext();
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [disabled, setDisabled] = useState<boolean>(false);
  
  const mutation = useMutation(
    async (formData: { username: string; password: string }) => {
      try {
        const { data } = await axios.post(Api.AUTH_URL, formData, {
          headers: {
            'Content-Type': 'application/json',
          },
        });

        return data;
      } catch (error) {
        throw new Error('Invalid credentials');
      }
    },
    {
      onSuccess: (data) => {
        setDisabled(true);
        const { username, email, token } = data;

        dispatchUser({
          type: UserActions.LOGIN_SUCCESS,
          payload: { username, email, token },
        });
        showSuccessMessage("Congratulations! You've successfully logged into your account");
        
        setTimeout(() => {
          onClose();
          
          if (token) {
            onSuccess();
          }
        }, 2000);
      },
      onError: (error: Error) => {
        showErrorMessage(error.message);
      },
    }
  )

  const handleLogin = (event: FormEvent) => {
    event.preventDefault();

    if (!username || !password) {
      return showErrorMessage('All fields are required');
    }

    if (username.length < 4 || username.length > 20) {
      return showErrorMessage('Username must be between 4 and 20 characters');
    }

    if (password.length < 6 || password.length > 20) {
      return showErrorMessage('Password must be between 8 and 20 characters');
    }

    mutation.mutate({ username, password });
  }
  
  return (
    <ModalContainer
      variants={fadeIn('down', 150, 0.3)}
      initial='hidden'
      animate='visible'
      exit='hidden'
    >
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
              type='password'
              placeholder='Enter your password'
              iconType='password'
              autoComplete='off'
              onChange={(value) => setPassword(removeWhitespaces(value))}
            />
          </FlexBox>
          <FlexBox alignItems='center' columnGap={20}>
            <ButtonWithSpinner 
              title='Login'
              disabled={disabled}
              onClick={handleLogin}
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

export default LoginModal;
