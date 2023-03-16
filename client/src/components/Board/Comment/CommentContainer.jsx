import { BsTrash3Fill } from 'react-icons/bs';
import { FaPencilAlt } from 'react-icons/fa';

function CommentContainer() {
  return (
    <div className="flex">
      <BsTrash3Fill className="text-[#d9d9d9] ml-32 mr-2 mt-1" />
      <FaPencilAlt className="text-[#d9d9d9] mt-1" />
    </div>
  );
}

export default CommentContainer;
