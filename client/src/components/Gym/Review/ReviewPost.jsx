import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { ErrorMessage } from '@hookform/error-message';
import { BsSend } from 'react-icons/bs';
import StarIcon from '../../UI/Icon/StarIcon';
import gymAxios from '../../../pages/Gym/gymAxios';
import useGymStore from '../../../state/useGymStore';

function GymReviewPost() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { id } = useParams();
  const { setReviews } = useGymStore();

  const onSubmit = async data => {
    await gymAxios
      .post(`/gyms/reviews/${id}`, {
        gymGrade: Number(data.grade),
        gymComment: data.review,
      })
      .then((document.getElementById('textArea').value = null))
      .catch(err => console.log(err));
    gymAxios.get(`/gyms/reviews/${id}`).then(res => setReviews(res.data));
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
          <ErrorMessage
            errors={errors}
            name="review"
            render={({ message }) => (
              <p className="ml-2 text-sm text-red">{message}</p>
            )}
          />
        </div>
        <div className="mt-2">
          <button
            id="reviewsubmit"
            type="submit"
            className="flex items-center mt-3 text-xl"
          >
            <BsSend />
          </button>
        </div>
      </form>
    </div>
  );
}

export default GymReviewPost;
