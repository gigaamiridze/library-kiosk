const { VITE_API_KEY } = import.meta.env;

export enum Api {
  URL = 'https://www.googleapis.com/books/v1/volumes',
  KEY = VITE_API_KEY,
}
