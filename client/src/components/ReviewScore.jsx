import StarIcon from './UI/StarIcon';

function ReviewScore() {
  return (
    <div className="flex items-center mr-auto">
      <StarIcon />
      <span className="font-bold text-[14px]">4.5</span>
      <span className="font-bold text-[10px]">(10)</span>
    </div>
  );
}

export default ReviewScore;
