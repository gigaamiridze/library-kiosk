import { BsCaretLeftFill, BsCaretRightFill } from 'react-icons/bs';
import { IPaginationProps } from '../../interfaces';
import { FlexBox, Button } from '../../styles';
import { Heading } from '../../components';

function Pagination(props: IPaginationProps) {
  const { data, currentPage, setcurrentPage, isPreviousData, isFetching } = props;

  const handlePrevPage = () => {
    setcurrentPage((prevPage) => Math.max(prevPage - 1, 0));
  }

  const handleNextPage = () => {
    if (!isPreviousData && data && data.length > 0) {
      setcurrentPage((prevPage) => prevPage + 1);
    }
  }

  return (
    <FlexBox alignItems='center' columnGap={12}>
      <Button
        backgroundColor='purple'
        titleColor='white'
        hoverBgColor='white'
        hoverTitleColor='purple'
        padding={10}
        onClick={handlePrevPage}
        disabled={currentPage === 0}
      >
        <BsCaretLeftFill />
      </Button>
      <Heading 
        title={`${currentPage + 1}`}
        type='h5'
        fontWeight='500'
      />
      <Button
        backgroundColor='purple'
        titleColor='white'
        hoverBgColor='white'
        hoverTitleColor='purple'
        padding={10}
        onClick={handleNextPage}
        disabled={isPreviousData || isFetching}
      >
        <BsCaretRightFill />
      </Button>
    </FlexBox>
  )
}

export default Pagination;
