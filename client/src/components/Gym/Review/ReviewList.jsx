import { useLocation, useParams } from 'react-router-dom';
import useStore from '../../../state/useStore';
import GymReview from './Review';

function GymReviewList() {
  const location = useLocation();
  const { reviews } = useStore();
  const { id } = useParams();

  const reviewFilter = reviews.filter(review => review.gymId === Number(id));

  return (
    <div>
      {location.pathname.slice(-7) === 'reviews'
        ? reviewFilter.map(review => (
            <GymReview key={review.reviewId} review={review} />
          ))
        : reviewFilter.map((review, idx) =>
            idx <= 2 ? (
              <GymReview key={review.reviewId} review={review} />
            ) : null,
          )}
    </div>
  );
}

export default GymReviewList;
