import axios from 'axios';
import { IBookData, IBookCategory } from '../interfaces';
import { Api } from '../constants';

export const getBookCategories = async () => {
  const { data } = await axios.get<IBookData>(`${Api.URL}/volumes?q=all&maxResults=30&key=${Api.KEY}`);
  
  const uniqueCategories = new Set<string>();

  const categories: IBookCategory[] = data.items.reduce((acc: IBookCategory[], item) => {
    const category = item.volumeInfo.categories?.[0];

    // Check if the category is not a duplicate
    if (category && !uniqueCategories.has(category)) {
      uniqueCategories.add(category);

      acc.push({
        id: item.id,
        title: category,
      });
    }

    return acc;
  }, []);

  return categories;
}
