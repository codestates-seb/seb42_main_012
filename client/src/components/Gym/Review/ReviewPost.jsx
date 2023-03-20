import axios from 'axios';
// import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import useStore from '../../../state/useStore';
// import PostButton from '../../UI/Button/PostButton';
// import TextInput from '../../UI/Input/TextInput';
import StartIconContainer from '../StarIconContainer';

function GymReviewPost() {
  const { register, handleSubmit } = useForm();
  const { reviews, setReviews } = useStore();
  const { id } = useParams();

  const toDay = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = (String(0) + (today.getMonth() + 1)).slice(-2);
    const day = (String(0) + today.getDate()).slice(-2);

    const dateString = `${year}-${month}-${day}`;

    return dateString;
  };

  const newId = reviews.length + 1;

  const onSubmit = data => {
    axios
      .post('/gyms/reviews', {
        reviewId: newId,
        gymId: Number(id),
        displayName: 'test',
        grade: 4,
        comment: data.review,
        createdAt: toDay(),
      })
      .then(() => setReviews(reviews))
      .then(() => console.log(reviews));
  };

  return (
    <div className="pb-3 mb-4 border-b border-grey">
      <StartIconContainer />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex items-center justify-between w-90"
      >
        <div className="w-full mr-3">
          <textarea
            {...register('review')}
            className="w-full p-2 border border-grey rounded-xl focus:outline-[var(--main)]"
          />
          {/* <TextInput classname="w-full p-2 border border-grey rounded-xl focus:outline-[var(--main)]" /> */}
        </div>
        <div className="mt-2">
          {/* <PostButton /> */}
          <input id="reviewsubmit" type="submit" />
          {/* <label for="reviewsubmit"></label> */}
        </div>
      </form>
    </div>
  );
}

export default GymReviewPost;
