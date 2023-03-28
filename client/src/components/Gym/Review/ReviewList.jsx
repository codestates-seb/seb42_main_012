import { useLocation } from 'react-router-dom';
import useGymStore from '../../../state/useGymStore';
import GymReview from './Review';

function GymReviewList() {
  const location = useLocation();
  const { reviews } = useGymStore();
  console.log(reviews);

  return (
    <div>
      {location.pathname.slice(-7) === 'reviews'
        ? reviews.map(review => (
            <GymReview key={review.reviewId} review={review} />
          ))
        : reviews.map((review, idx) =>
            idx <= 2 ? (
              <GymReview key={review.reviewId} review={review} />
            ) : null,
          )}
    </div>
  );
}

export default GymReviewList;
