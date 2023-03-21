import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import useStore from '../../../state/useStore';
import StarIcon from '../../UI/Icon/StarIcon';
import Today from '../../UI/Today';

function GymReviewPost() {
  const { register, handleSubmit } = useForm();
  const { reviews, setReviews } = useStore();
  const { id } = useParams();

  const onSubmit = async data => {
    await axios
      .post('/gyms/reviews', {
        reviewId: reviews.length + 1,
        gymId: Number(id),
        displayName: 'test',
        grade: Number(data.grade),
        comment: data.review,
        createdAt: Today(),
      })
      .then((document.getElementById('textArea').value = null));

    axios.get('/gyms/reviews').then(res => setReviews(res.data.data.contents));
  };

  return (
    <div className="pb-3 mb-4 border-b border-grey">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex items-center justify-between w-90"
      >
        <div className="w-full mr-3">
          <div className="flex items-center mb-1">
            <StarIcon />
            <select {...register('grade')}>
              <option value="5">5</option>
              <option value="4">4</option>
              <option value="3">3</option>
              <option value="2">2</option>
              <option value="1">1</option>
            </select>
          </div>
          <textarea
            id="textArea"
            {...register('review', {
              required: '내용을 입력해주세요.',
              minLength: {
                value: 20,
                message: '20글자 이상 입력해주세요.',
              },
            })}
            className="w-full p-2 border border-grey rounded-xl focus:outline-[var(--main)]"
          />
        </div>
        <div className="mt-2">
          <input id="reviewsubmit" type="submit" />
        </div>
      </form>
    </div>
  );
}

export default GymReviewPost;
