import GymReviewList from '../../components/Gym/Review/ReviewList';
import ReviewScore from '../../components/Gym/Review/ReviewScore';

function GymReviewPage() {
  return (
    <div className="mb-40">
      <ReviewScore />
      <GymReviewList />
    </div>
  );
}

export default GymReviewPage;
