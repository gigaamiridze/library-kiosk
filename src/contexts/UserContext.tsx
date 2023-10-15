import { createContext, useContext, useReducer } from 'react';
import { IUserContext, IUserState, UserActionType, IUserContextProvider } from '../interfaces';
import { UserActions } from '../constants';

const UserContext = createContext<IUserContext | null>(null);

export const useUserContext = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error('UserContext not found. Make sure to wrap your application with UserContextProvider.');
  }

  return context;
}

const initialUserState: IUserState = {
  isAuthenticated: false,
  username: null,
  email: null,
}

const userReducer = (state: IUserState, action: UserActionType) => {
  switch (action.type) {
    case UserActions.LOGIN_SUCCESS:
      return { 
        ...state, 
        isAuthenticated: true, 
        username: action.payload.username,
        email: action.payload.email 
      };
    case UserActions.LOGOUT:
      return { ...state, isAuthenticated: false, username: null, email: null };
    default:
      return state;
  }
}

export const UserContextProvider = ({ children }: IUserContextProvider) => {
  const [userState, dispatchUser] = useReducer(userReducer, initialUserState);
  const value = {userState, dispatchUser};

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  )
}
