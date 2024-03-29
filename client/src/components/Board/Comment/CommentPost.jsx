import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { AiOutlineUpCircle } from 'react-icons/ai';
// import TextInput from '../../UI/Input/TextInput';
import api from '../../../utils/api';
import useBoardStore from '../../../state/useBoardStore';

function CommentPost() {
  const { register, handleSubmit } = useForm();
  const { id } = useParams();
  const { setComments } = useBoardStore();

  const onSubmit = async data => {
    const commentsData = {
      comment: data.comment,
    };

    await api
      .post(`/communities/comments/${id}`, commentsData)
      .then((document.getElementById('comment').value = null))
      .catch(() => alert('요청실패'));

    api
      .get(`/communities/comments/${id}?lastFeedId=`)
      .then(res => {
        setComments(res.data.contents);
      })
      .catch(() => alert('요청실패'));
  };

  const handleKeyPress = event => {
    if (event.key === 'Enter') {
      handleSubmit(onSubmit);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex mt-8">
          <input
            id="comment"
            onKeyUp={event => handleKeyPress(event)}
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
