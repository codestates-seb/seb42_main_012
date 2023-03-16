import { useNavigate } from 'react-router-dom';
import { BsFillCheckSquareFill } from 'react-icons/bs';

function CompleteButton({ nav }) {
  const navigate = useNavigate();

  const handlerClickComplete = () => {
    navigate(nav);
  };
  return (
    <button type="submit" className="pr-2 text-xl">
      <BsFillCheckSquareFill onClick={handlerClickComplete} />
    </button>
  );
}

export default CompleteButton;
