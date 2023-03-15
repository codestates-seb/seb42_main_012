import { useNavigate } from 'react-router-dom';
import { AiFillEdit } from 'react-icons/ai';

function EditButton({ nav }) {
  const navigate = useNavigate();

  const handlerClickEdit = () => {
    navigate(nav);
  };
  return (
    <button type="button" className="pr-2 text-2xl">
      <AiFillEdit onClick={handlerClickEdit} />
    </button>
  );
}

export default EditButton;
