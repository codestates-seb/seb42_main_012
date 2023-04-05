import { useNavigate } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi';
import api from '../../../utils/api';

function LogoutButton() {
  const navigate = useNavigate();
  const handleLogout = () => {
    api
      .post('/auth/logout')
      .then(res => {
        if (res.status === 200) {
          localStorage.clear();
          alert('로그아웃 성공!');
          navigate('/login');
        }
      })
      .catch(err => console.log(err));
  };
  return (
    <button type="button" className="pr-2 text-xl">
      <FiLogOut onClick={handleLogout} />
    </button>
  );
}

export default LogoutButton;
