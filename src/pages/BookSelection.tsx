import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useLibraryContext } from '../contexts';
import { PageRoutes } from '../constants';

function BookSelection() {
  const navigate = useNavigate();
  const { libraryState } = useLibraryContext();
  const [searchParams] = useSearchParams();
  const category = searchParams.get('category');

  useEffect(() => {
    if (!libraryState.selectedCategory) {
      navigate(PageRoutes.BOOK_CATEGORIES);
    }
  }, []);

  return (
    <div>Book Selection</div>
  )
}

export default BookSelection;
