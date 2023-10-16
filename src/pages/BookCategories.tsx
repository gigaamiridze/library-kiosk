import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import { Container, FlexBox, GrayBlock, SpinnerLoader, Button } from '../styles';
import { PageRoutes, LibraryActions } from '../constants';
import { Heading, Pagination } from '../components';
import { getBookCategories } from '../services';
import { useLibraryContext } from '../contexts';
import { showWarningMessage } from '../utils';

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
      }, 3000);

      return () => clearTimeout(timeoutId);
    } else {
      showWarningMessage('Please select a book category');
    }
  }
  
  return (
    <FlexBox as='section' flexDirection='column' rowGap={60}>
      <GrayBlock flexDirection='column' alignItems='center' rowGap={20}>
        <Heading
          title='Explore your favorite book category 📚'
          type='h4'
          fontWeight='600'
          textAlign='center'
          lineHeight={24}
        />
        <Heading
          title='Categories'
          type='h1'
          fontFamily='secondary'
          fontWeight='500'
          textAlign='center'
          lineHeight={86}
        />
        <Link to={PageRoutes.MAIN_SERVICES} style={{ marginTop: 15 }}>
          <Heading
            title='Back To Home'
            type='h5'
            color='purple'
            fontWeight='500'
            textAlign='center'
            lineHeight={24}
          />
        </Link>
      </GrayBlock>
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
              <Button 
                backgroundColor='purple'
                titleColor='white'
                hoverBgColor='white'
                hoverTitleColor='purple'
                padding={10}
                disabled={disabled}
                onClick={handleNavigate}
              >
                Select
                {disabled && (
                  <SpinnerLoader size={19} color='gainsboro' />
                )}
              </Button>
            </FlexBox>
          </FlexBox>
        </FlexBox>
      </Container>
    </FlexBox>
  )
}

export default BookCategories;
