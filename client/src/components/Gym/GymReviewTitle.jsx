import StartIconContainer from './StarIconContainer';

function GymReviewTitle({ review }) {
  return (
    <div className="flex items-center justify-between mb-1">
      <div className="flex items-center">
        <StartIconContainer />
        <span className="ml-2 text-[14px]">{review.displayName}</span>
      </div>
      <span className="text-[14px]">{review.createdAt}</span>
    </div>
  );
}

export default GymReviewTitle;
