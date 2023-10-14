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

const userInitialState: IUserState = {
  isAuthenticated: false,
  username: null,
}

const userReducer = (state: IUserState, action: UserActionType) => {
  switch (action.type) {
    case UserActions.LOGIN_SUCCESS:
      return { isAuthenticated: true, username: action.payload };
    case UserActions.LOGOUT:
      return { isAuthenticated: false, username: null };
    default:
      return state;
  }
}

export const UserContextProvider = ({ children }: IUserContextProvider) => {
  const [userState, dispatchUser] = useReducer(userReducer, userInitialState);
  const value = {userState, dispatchUser};

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  )
}
