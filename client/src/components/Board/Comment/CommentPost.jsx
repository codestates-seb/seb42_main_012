import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { AiOutlineUpCircle } from 'react-icons/ai';
// import TextInput from '../../UI/Input/TextInput';
import api from '../../../utils/api';

function CommentPost() {
  const { register, handleSubmit } = useForm();
  const { id } = useParams();
  console.log(id);

  const onSubmit = async data => {
    const commentsData = {
      comment: data.comment,
    };

    await api
      .post(`/communities/comments/${id}`, commentsData)
      .then(res => {
        console.log(res);
      })
      .catch(() => alert('요청실패'));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex mt-8">
        <input
          className="w-full border border-[var(--second-border)]"
          placeholder="댓글을 입력하세요."
          {...register('comment', {
            required: '댓글을 입력해주세요',
          })}
        />
        <AiOutlineUpCircle className="ml-2 w-7 h-7" />
      </div>
    </form>
  );
}

export default CommentPost;
