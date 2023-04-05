import { useNavigate } from 'react-router-dom';
import { BsPencilSquare } from 'react-icons/bs';

function PostButton({ nav }) {
  const navigate = useNavigate();

  const handlerClickPost = () => {
    navigate(nav);
  };

  return (
    <button type="button" className="pr-2 text-xl">
      <BsPencilSquare onClick={handlerClickPost} />
    </button>
  );
}

export default PostButton;
