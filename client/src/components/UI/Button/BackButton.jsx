import { FiChevronLeft } from 'react-icons/fi';
import { useNavigate, useLocation } from 'react-router-dom';

function BackButton() {
  const navigate = useNavigate();
  const location = useLocation();
  let classes = '';
  let nav = -1;

  if (
    !(
      location.pathname === '/' ||
      location.pathname === '/gyms' ||
      location.pathname === '/board' ||
      location.pathname === '/my' ||
      location.pathname === '/login'
    )
  ) {
    classes += 'text-4xl';
  } else {
    classes += 'w-0 h-0 ml-[36px]';
  }

  if (location.pathname === '/gyms/gympost') {
    nav = '/gyms';
  }

  return (
    <div className="h-[36px]">
      <FiChevronLeft className={classes} onClick={() => navigate(nav)} />
    </div>
  );
}

export default BackButton;
