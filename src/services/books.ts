import axios from 'axios';
import { IBookData } from '../interfaces';
import { Api } from '../constants';

export const getBooksByCategory = async (page: number, maxResults: number, category: string) => {
  const startIndex = page * maxResults;
  const { data } = await axios.get<IBookData>(`${Api.URL}/volumes?q=subject:${category}&startIndex=${startIndex}&maxResults=${maxResults}&key=${Api.KEY}`);
  return data.items;
}