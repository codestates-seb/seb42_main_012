import GymReviewConmment from './GymReviewConmment';
import GymReviewTitle from './GymReviewTitle';

function GymReview({ review }) {
  return (
    <div className="pb-2 mt-4 border-b border-grey">
      <GymReviewTitle review={review} />
      <GymReviewConmment review={review} />
    </div>
  );
}

export default GymReview;
