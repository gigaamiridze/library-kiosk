import { ReactNode } from 'react';
import { LibraryActions } from '../constants';

export interface ILibraryContext {
  libraryState: ILibraryState;
  dispatchLibrary: React.Dispatch<LibraryActionType>;
}

export interface ILibraryState {
  selectedCategory: string | null;
  selectedBook: string | null;
  borrowError: string | null;
  returnError: string | null;
}

export type LibraryActionType =
  | { type: LibraryActions.SELECT_CATEGORY; payload: string }
  | { type: LibraryActions.SELECT_BOOK; payload: string }
  | { type: LibraryActions.BORROW_SUCCESS }
  | { type: LibraryActions.BORROW_FAILURE; payload: string }
  | { type: LibraryActions.RETURN_SUCCESS }
  | { type: LibraryActions.RETURN_FAILURE; payload: string }
  | { type: LibraryActions.RESET_ERRORS }

export interface ILibraryContextProvider {
  children: ReactNode;
}
