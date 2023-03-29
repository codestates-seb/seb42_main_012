import { useState } from 'react';
import { CiEraser } from 'react-icons/ci';
import { BiMessageSquareCheck } from 'react-icons/bi';
import { useParams } from 'react-router-dom';
import { RiDeleteBin5Line } from 'react-icons/ri';
import GymReviewConmment from './ReviewConmment';
import GymReviewTitle from './ReviewTitle';
import gymAxios from '../../../pages/Gym/gymAxios';
import StarIcon from '../../UI/Icon/StarIcon';
import useGymStore from '../../../state/useGymStore';
import useMyStore from '../../../state/useMyStore';

function GymReview({ review }) {
  const { setReviews } = useGymStore();
  const { myElements } = useMyStore();
  const [edit, setEdit] = useState(false);
  const [comment, setComment] = useState(review.comment);
  const [grade, setGrade] = useState(review.grade);
  const { id } = useParams();

  const handleText = e => {
    setComment(e.target.value);
  };

  const handleGrade = e => {
    setGrade(e.target.value);
  };

  const handleDelete = async () => {
    await gymAxios
      .delete(`gyms/reviews/${review.reviewId}`)
      .then(res => console.log(res))
      .catch(err => console.log(err));

    await gymAxios.get(`/gyms/reviews/${id}`).then(res => {
      setReviews(res.data.data);
    });
  };

  const handleEdit = async e => {
    e.preventDefault();
    await gymAxios
      .patch(`/gyms/reviews/${review.reviewId}`, {
        gymGrade: grade,
        gymComment: comment,
      })
      .catch(err => console.log(err));

    await gymAxios.get(`/gyms/reviews/${id}`).then(res => {
      setReviews(res.data.data);
      const resFil = res.data.data.filter(
        re => re.gymReviewId === review.gymReviewId,
      );
      setComment(resFil[0].comment);
      setGrade(resFil[0].grade);
    });

    setEdit(false);
  };

  return (
    <div className="pb-2 mt-4 border-b border-[var(--second-border)]">
      <GymReviewTitle review={review} />
      {edit === false ? (
        <div className="flex">
          <GymReviewConmment review={review} />
          {myElements.memberId === review.memberId ? (
            <div className="ml-4">
              <button
                type="button"
                className="text-xl rounded-md hover:bg-grey"
                onClick={() => setEdit(!edit)}
              >
                <CiEraser />
              </button>
              <button
                type="button"
                className="text-xl rounded-md hover:bg-grey text-darkGrey"
                onClick={handleDelete}
              >
                <RiDeleteBin5Line />
              </button>
            </div>
          ) : (
            <div className="w-10 ml-4" />
          )}
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
