import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from 'react-query';
import { getBookCategories } from '../services';
import { Container, FlexBox, GrayBlock } from '../styles';
import { PageRoutes } from '../constants';
import { Heading } from '../components';

function BookCategories() {
  const [page, setPage] = useState<number>(0);

  const {
    data: categories,
    isLoading,
    isError,
    error,
    isFetching,
    isPreviousData,
  } = useQuery(['categories', page], () => getBookCategories(page, 5), {
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
        <div>
          {isLoading ? (
            <div>Loading...</div>
          ) : isError ? (
            <div>Error</div>
          ) : (
            <div>
              {categories?.map((category) => (
                <p key={category.id}>{category.title}</p>
              ))}
            </div>
          )}
          <span>Current Page: {page + 1}</span>
          <button
            onClick={() => setPage((prevPage) => Math.max(prevPage - 1, 0))}
            disabled={page === 0}
          >
            Previous Page
          </button>{' '}
          <button
            onClick={() => {
              if (!isPreviousData && categories && categories.length > 0) {
                setPage((prevPage) => prevPage + 1);
              }
            }}
            disabled={isPreviousData || isFetching}
          >
            Next Page
          </button>
          {isFetching ? <span>Loading...</span> : null}{' '}
        </div>
      </Container>
    </FlexBox>
  )
}

export default BookCategories;
