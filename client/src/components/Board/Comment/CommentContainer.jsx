import { BsTrash3Fill } from 'react-icons/bs';
import { FaPencilAlt } from 'react-icons/fa';

function CommentContainer() {
  return (
    <div className="flex ">
      <BsTrash3Fill className="text-[var(--second)] ml-8 mr-2 mt-1" />
      <FaPencilAlt className="text-[var(--second)] mt-1" />
    </div>
  );
}

export default CommentContainer;
