import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from 'react-query';
import { Container, FlexBox, GrayBlock, SpinnerLoader, Button } from '../styles';
import { Heading, Pagination } from '../components';
import { getBookCategories } from '../services';
import { PageRoutes } from '../constants';

function BookCategories() {
  const [page, setPage] = useState<number>(0);

  const {
    data: categories,
    isLoading,
    isError,
    isFetching,
    isPreviousData,
  } = useQuery(['categories', page], () => getBookCategories(page, 7), {
    keepPreviousData: true
  });
  
  return (
    <FlexBox as='section' flexDirection='column' rowGap={80}>
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
        <Link to={PageRoutes.MAIN_SERVICES} style={{ marginTop: 20 }}>
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
                  >
                    {category.title}
                  </Button>
                ))}
              </FlexBox>
            )}
            <Pagination 
              data={categories}
              currentPage={page}
              setcurrentPage={setPage}
              isPreviousData={isPreviousData}
              isFetching={isFetching}
            />
          </FlexBox>
        </FlexBox>
      </Container>
    </FlexBox>
  )
}

export default BookCategories;
