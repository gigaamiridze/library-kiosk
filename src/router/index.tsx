import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { Root, MainServices, BookSelection, BookCategories, Contact } from '../pages';
import { PageRoutes } from '../constants';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={PageRoutes.MAIN_SERVICES} Component={Root}>
      <Route index Component={MainServices} />
      <Route path={PageRoutes.CONTACT} Component={Contact} />
      <Route path={PageRoutes.BOOK_SELECTION} Component={BookSelection} />
      <Route path={PageRoutes.BOOK_CATEGORIES} Component={BookCategories} />
    </Route>
  )
);
