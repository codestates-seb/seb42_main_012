import { AiOutlineUpCircle } from 'react-icons/ai';
import TextInput from '../../UI/TextInput';

function CommentPost() {
  return (
    <div className="flex">
      <TextInput />
      <AiOutlineUpCircle className="w-6 h-6" />
    </div>
  );
}

export default CommentPost;
