import { AiOutlineUpCircle } from 'react-icons/ai';
import TextInput from '../../UI/Input/TextInput';

function CommentPost() {
  return (
    <div className="flex mt-8">
      <TextInput
        classname="w-full border border-[var(--second-border)]"
        placeholder="댓글을 입력하세요."
      />
      <AiOutlineUpCircle className="ml-2 w-7 h-7" />
    </div>
  );
}

export default CommentPost;
