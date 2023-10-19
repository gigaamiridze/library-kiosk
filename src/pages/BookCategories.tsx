import { useState } from 'react';
import { useQuery } from 'react-query';
import {  useNavigate } from 'react-router-dom';
import { Heading, Pagination, ButtonWithSpinner, WelcomeSection } from '../components';
import { Container, FlexBox, SpinnerLoader, Button } from '../styles';
import { PageRoutes, LibraryActions } from '../constants';
import { useLibraryContext } from '../contexts';
import { showWarningMessage } from '../utils';
import { getBookCategories } from '../api';
import { fadeInOut } from '../animations';

function BookCategories() {
  const [page, setPage] = useState<number>(0);
  const [disabled, setDisabled] = useState<boolean>(false);
  const { libraryState: { selectedCategory }, dispatchLibrary } = useLibraryContext();
  const navigate = useNavigate();

  const {
    data: categories,
    isLoading,
    isError,
    isFetching,
    isPreviousData,
  } = useQuery(['categories', page], () => getBookCategories(page, 7), {
    keepPreviousData: true,
    staleTime: 300000, // 5 minutes in milliseconds
    cacheTime: 3600000, // 1 hour in milliseconds
  });

  const handleCategorySelection = (newCategory: string) => {
    dispatchLibrary({ type: LibraryActions.SELECT_CATEGORY, payload: newCategory });
  }

  const handleNavigate = () => {
    if (selectedCategory) {
      setDisabled(true);

      const timeoutId = setTimeout(() => {
        navigate(`${PageRoutes.BOOK_SELECTION}?category=${selectedCategory?.toLowerCase()}`);
      }, 2000);

      return () => clearTimeout(timeoutId);
    } else {
      showWarningMessage('Please select a book category.');
    }
  }
  
  return (
    <FlexBox 
      flexDirection='column' 
      rowGap={60}
      variants={fadeInOut}
      initial='initial'
      animate='animate'
      exit='exit'
    >
      <WelcomeSection
        smallTitle='Explore your favorite book category'
        bigTitle='Categories'
        backTitle='Back To Home'
        onBack={() => navigate(PageRoutes.MAIN_SERVICES)}
      />
      <Container>
        <FlexBox flexDirection='column' rowGap={50}>
          <Heading 
            title='Select a category'
            type='h2'
            fontFamily='secondary'
            fontWeight='500'
            lineHeight={65}
          />
          <FlexBox 
            flexDirection='column' 
            alignItems='center' 
            justifyContent='center'
            rowGap={40}
          >
            {isLoading || isFetching ? (
              <SpinnerLoader />
            ) : isError ? (
              <Heading 
                title='Something went wrong. Please try again.' 
                type='h5' 
                fontWeight='500'
              />
            ) : (
              <Container>
                <FlexBox 
                  alignItems='center' 
                  justifyContent='center'
                  flexWrap='wrap'
                  columnGap={20}
                  rowGap={20}
                >
                  {categories?.map((category) => (
                    <Button 
                      key={category.id}
                      padding={10}
                      isSelected={selectedCategory === category.title}
                      onClick={() => handleCategorySelection(category.title)}
                    >
                      {category.title}
                    </Button>
                  ))}
                </FlexBox>
              </Container>
            )}
            <FlexBox alignItems='center' columnGap={30}>
              <Pagination 
                data={categories}
                currentPage={page}
                setcurrentPage={setPage}
                isPreviousData={isPreviousData}
                isFetching={isFetching}
              />
              <ButtonWithSpinner 
                title='Select'
                disabled={disabled} 
                onClick={handleNavigate}
              />
            </FlexBox>
          </FlexBox>
        </FlexBox>
      </Container>
    </FlexBox>
  )
}

export default BookCategories;
