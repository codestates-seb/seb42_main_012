import { useState } from 'react';
import { CiEraser } from 'react-icons/ci';
import { BiMessageSquareCheck } from 'react-icons/bi';
import GymReviewConmment from './ReviewConmment';
import GymReviewTitle from './ReviewTitle';
import gymAxios from '../../../pages/Gym/gymAxios';
import StarIcon from '../../UI/Icon/StarIcon';

function GymReview({ review }) {
  const [edit, setEdit] = useState(false);
  const [comment, setComment] = useState(review.gymComment);
  const [grade, setGrade] = useState(review.gymGrade);

  console.log(review);

  const handleText = e => {
    setComment(e.target.value);
  };

  const handleGrade = e => {
    setGrade(e.target.value);
  };

  const handleEdit = () => {
    gymAxios
      .patch(`/gyms/reviews/${review.reviewId}`, {
        gymGrade: grade,
        gymComment: comment,
      })
      .then(window.location.reload())
      .catch(err => console.log(err));
  };

  return (
    <div className="pb-2 mt-4 border-b border-[var(--second-border)]">
      <GymReviewTitle review={review} />
      {edit === false ? (
        <div className="flex">
          <GymReviewConmment review={review} />
          <button
            type="button"
            className="absolute text-xl right-4 top-50 hover:bg-grey"
          >
            <CiEraser onClick={() => setEdit(!edit)} />
          </button>
        </div>
      ) : (
        <form className="flex items-center">
          <StarIcon />
          <select onChange={handleGrade} value={grade}>
            <option value="5">5</option>
            <option value="4">4</option>
            <option value="3">3</option>
            <option value="2">2</option>
            <option value="1">1</option>
          </select>
          <textarea
            value={comment}
            onChange={handleText}
            className="p-2 border border-grey rounded-xl focus:outline-[var(--main)] w-80"
          />
          <button
            type="submit"
            onClick={handleEdit}
            className="mb-2 ml-4 text-2xl rounded-md cursor-pointer hover:bg-grey"
          >
            <BiMessageSquareCheck />
          </button>
        </form>
      )}
    </div>
  );
}

export default GymReview;
