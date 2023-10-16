const { VITE_API_KEY } = import.meta.env;

export enum Api {
  KEY = VITE_API_KEY,
  AUTH_URL = 'https://dummyjson.com/auth/login',
  BOOKS_URL = 'https://www.googleapis.com/books/v1',
}
