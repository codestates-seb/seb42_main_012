import { FiChevronLeft } from 'react-icons/fi';
import { useNavigate, useLocation } from 'react-router-dom';

function BackButton() {
  const navigate = useNavigate();
  // const param = useParams();
  const location = useLocation();
  let classes = '';
  let nav = '';
  const path = location.pathname.slice(1);

  if (path === 'gyms') {
    nav = '/gyms';
  } else if (path === 'board') {
    nav = '/board';
  } else if (path === 'my') {
    nav = '/my';
  } else {
    nav = -1;
  }

  if (
    !(
      location.pathname === '/' ||
      location.pathname === '/gyms' ||
      location.pathname === '/board' ||
      location.pathname === '/my' ||
      location.pathname === '/login'
    )
  ) {
    classes += 'text-4xl cursor-pointer';
  } else {
    classes += 'w-0 h-0 ml-[36px] cursor-pointer';
  }

  return (
    <div className="h-[36px]">
      <FiChevronLeft className={classes} onClick={() => navigate(nav)} />
    </div>
  );
}

export default BackButton;
