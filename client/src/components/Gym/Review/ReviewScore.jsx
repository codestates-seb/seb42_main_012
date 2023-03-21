import { useParams } from 'react-router-dom';
import StarIcon from '../../UI/Icon/StarIcon';
import useStore from '../../../state/useStore';

function ReviewScore({ gymId }) {
  const { id } = useParams();
  const { reviews } = useStore();

  const reviewFilter = reviews.filter(
    review => review.gymId === (gymId === undefined ? Number(id) : gymId),
  );

  const grade = reviewFilter.map(review => review.grade);

  return (
    <div className="flex items-center mr-auto">
      <StarIcon />
      <span className="text-sm font-bold">
        {grade.length === 0
          ? 0
          : (grade.reduce((a, b) => a + b) / grade.length).toFixed(1)}
      </span>
      <span className="text-xs font-bold">
        {grade.length === 0 ? null : `(${grade.length})`}
      </span>
    </div>
  );
}

export default ReviewScore;