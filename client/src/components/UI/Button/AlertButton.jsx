import { useNavigate } from 'react-router-dom';
import { FaBell } from 'react-icons/fa';

function AlertButton({ nav }) {
  const navigate = useNavigate();

  const handlerClickEdit = () => {
    navigate(nav);
  };
  return (
    <button type="button" className="pr-2 text-xl">
      <FaBell onClick={handlerClickEdit} />
    </button>
  );
}

export default AlertButton;
