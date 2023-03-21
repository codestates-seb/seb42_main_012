import { useNavigate } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi';

function LogoutButton({ nav }) {
  const navigate = useNavigate();

  const handlerClickEdit = () => {
    navigate(nav);
  };
  return (
    <button type="button" className="pr-2 text-xl">
      <FiLogOut onClick={handlerClickEdit} />
    </button>
  );
}

export default LogoutButton;
