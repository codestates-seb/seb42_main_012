import { useEffect, useState } from 'react';
import StarIcon from '../../UI/Icon/StarIcon';
import gymAxios from '../../../pages/Gym/gymAxios';

function ReviewScoreList({ gymId }) {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    gymAxios.get(`/gyms/reviews/${gymId}`).then(res => setReviews(res.data));
  }, []);
  const grade = reviews.map(review => review.grade);

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

export default ReviewScoreList;
