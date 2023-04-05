import { AiOutlineDelete } from 'react-icons/ai';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../../../utils/api';

function BoardDelete() {
  const { id } = useParams();
  const navigate = useNavigate();

  const deleteHandler = async () => {
    if (window.confirm('정말 삭제하시겠어요?🥺')) {
      await api.delete(`/communities/${id}`);
      navigate('/board');
    }
  };

  return (
    <button type="button" onClick={deleteHandler} className="ml-2">
      <AiOutlineDelete />
    </button>
  );
}

export default BoardDelete;
