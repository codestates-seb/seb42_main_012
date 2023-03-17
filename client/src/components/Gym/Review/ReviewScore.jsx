import StarIcon from '../../UI/Icon/StarIcon';

function ReviewScore() {
  return (
    <div className="flex items-center mr-auto">
      <StarIcon />
      <span className="text-sm font-bold">4.5</span>
      <span className="text-xs font-bold">(10)</span>
    </div>
  );
}

export default ReviewScore;
