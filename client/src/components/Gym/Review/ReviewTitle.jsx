import StartIconContainer from '../StarIconContainer';

function GymReviewTitle({ review }) {
  return (
    <div className="flex items-center justify-between mb-1">
      <div className="flex items-center">
        <StartIconContainer />
        <span className="ml-2 text-sm">{review.displayName}</span>
      </div>
      <span className="text-sm">{review.createdAt}</span>
    </div>
  );
}

export default GymReviewTitle;
