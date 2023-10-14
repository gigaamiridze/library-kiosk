const { VITE_API_KEY } = import.meta.env;

export enum Api {
  URL = 'https://www.googleapis.com/books/v1',
  KEY = VITE_API_KEY,
}
