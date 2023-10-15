import { BookCardContainer, FlexBox } from '../../styles';
import { Heading, Rating } from '../../components';
import { IBookCardProps } from '../../interfaces';
import { images } from '../../assets';

function BookCard(props: IBookCardProps) {
  const { title, image, rating, authors, isSelected, onClick } = props;

  return (
    <BookCardContainer 
      isSelected={isSelected}
      onClick={onClick}
    >
      {image 
        ? <img src={image} alt={title} />
        : <img src={images.defaultBookCover} alt='Default Book Cover' />
      }
      <div id='info'>
        <FlexBox flexDirection='column' rowGap={8}>
          <Rating rating={rating} />
          <Heading 
            title={title}
            type='h4'
            fontWeight='600'
            ellipsis={true}
          />
          {authors?.length > 0 && (
            <Heading 
              title={`By ${authors[0]}`}
              type='h5'
              fontWeight='600'
              ellipsis={true}
            />
          )}
        </FlexBox>
      </div>
    </BookCardContainer>
  )
}

export default BookCard;
