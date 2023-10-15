import { TiStarFullOutline, TiStarHalfOutline, TiStarOutline } from 'react-icons/ti';
import { RatingContainer } from '../../styles';

function Rating({ rating = 3.5 }: { rating: number }) {
  return (
    <RatingContainer alignItems='center'>
      <>
        <span>
          {rating >= 1 ? (
            <TiStarFullOutline />
          ) : rating >= 0.5 ? (
            <TiStarHalfOutline />
          ) : (
            <TiStarOutline />
          )}
        </span>
        <span>
          {rating >= 2 ? (
            <TiStarFullOutline />
          ) : rating >= 1.5 ? (
            <TiStarHalfOutline />
          ) : (
            <TiStarOutline />
          )}
        </span>
        <span>
          {rating >= 3 ? (
            <TiStarFullOutline />
          ) : rating >= 2.5 ? (
            <TiStarHalfOutline />
          ) : (
            <TiStarOutline />
          )}
        </span>
        <span>
          {rating >= 4 ? (
            <TiStarFullOutline />
          ) : rating >= 3.5 ? (
            <TiStarHalfOutline />
          ) : (
            <TiStarOutline />
          )}
        </span>
        <span>
          {rating >= 5 ? (
            <TiStarFullOutline />
          ) : rating >= 4.5 ? (
            <TiStarHalfOutline />
          ) : (
            <TiStarOutline />
          )}
        </span>
      </>
    </RatingContainer>
  )
}

export default Rating;
