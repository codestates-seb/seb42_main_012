import { FiChevronLeft } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

function BackButton() {
  const navigate = useNavigate();
  return (
    <div className="text-4xl">
      <FiChevronLeft onClick={() => navigate(-1)} />
    </div>
  );
}

export default BackButton;
