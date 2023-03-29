import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { AiOutlineUpCircle } from 'react-icons/ai';
// import TextInput from '../../UI/Input/TextInput';
import api from '../../../utils/api';

function CommentPost() {
  const { register, handleSubmit } = useForm();
  const { id } = useParams();

  const handleKeyPress = event => {
    if (event.key === 'Enter') {
      event.preventDefault();
    }
  };

  const onSubmit = async data => {
    const commentsData = {
      comment: data.comment,
    };

    await api
      .post(`/communities/comments/${id}`, commentsData)
      .then(res => {
        console.log(res.data);
      })
      .catch(() => alert('요청실패'));

    // window.location.reload();
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex mt-8">
          <input
            onKeyDown={handleKeyPress}
            className="w-full border border-[var(--second-border)] outline-[var(--main)] rounded-md p-2"
            placeholder="댓글 입력 후 엔터를 누르세요."
            {...register('comment', {
              required: '댓글을 입력해주세요',
            })}
          />
          <button type="submit">
            <AiOutlineUpCircle className="ml-2 w-7 h-7" />
          </button>
        </div>
      </form>
    </>
  );
}

export default CommentPost;
