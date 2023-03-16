import { useNavigate } from 'react-router-dom';
import { AiOutlineCheck } from 'react-icons/ai';

function CompleteButton({ nav }) {
  const navigate = useNavigate();

  const handlerClickComplete = () => {
    navigate(nav);
  };
  return (
    <button type="submit" className="pr-2 text-xl">
      <AiOutlineCheck onClick={handlerClickComplete} />
    </button>
  );
}

export default CompleteButton;
