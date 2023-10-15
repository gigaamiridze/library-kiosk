import { IBookCardProps } from '../../interfaces';
import { BookCardContainer } from '../../styles';
import Rating from './Rating';

function BookCard(props: IBookCardProps) {
  const { title, image, rating, authors, isSelected, handleClick } = props;

  return (
    <BookCardContainer 
      isSelected={isSelected}
      onClick={handleClick}
    >
      <img src={image} alt={title} />
      <div id='info'>
        <Rating rating={rating} />
      </div>
    </BookCardContainer>
  )
}

export default BookCard;
