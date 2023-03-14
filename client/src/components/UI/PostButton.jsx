import { useNavigate } from 'react-router-dom';
import { BsPencilSquare } from 'react-icons/bs';

function PostButton() {
  const navigate = useNavigate();

  const handlerClickPost = () => {
    navigate('/communities/newpost', {});
  };
  return (
    <div className="pr-2 text-2xl">
      <BsPencilSquare onClick={handlerClickPost} />
    </div>
  );
}

export default PostButton;
