import { IBookCardProps } from '../interfaces';
import { BookCardContainer } from '../styles';

function BookCard(props: IBookCardProps) {
  const { title, image, rating, author, isSelected, handleClick } = props;

  return (
    <BookCardContainer 
      isSelected={isSelected}
      onClick={handleClick}
    >
      <img src={image} alt={title} />
    </BookCardContainer>
  )
}

export default BookCard;
