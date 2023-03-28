import { useLocation } from 'react-router-dom';
import useGymStore from '../../../state/useGymStore';
import GymReview from './Review';

function GymReviewList() {
  const location = useLocation();
  const { reviews } = useGymStore();

  return (
    <div>
      {location.pathname.slice(-7) === 'reviews'
        ? reviews.map(review => (
            <GymReview key={review.gymReviewId} review={review} />
          ))
        : reviews.map((review, idx) =>
            idx <= 2 ? (
              <GymReview key={review.gymReviewId} review={review} />
            ) : null,
          )}
    </div>
  );
}

export default GymReviewList;
