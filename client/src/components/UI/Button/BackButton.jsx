import { FiChevronLeft } from 'react-icons/fi';
import { useNavigate, useLocation } from 'react-router-dom';
import useGymStore from '../../../state/useGymStore';

function BackButton() {
  const { gymsDetail } = useGymStore();
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
    classes += 'text-4xl cursor-pointer';
  } else {
    classes += 'w-0 h-0 ml-[36px] cursor-pointer';
  }

  if (location.pathname === '/gyms/gympost') {
    nav = '/gyms';
  } else if (location.pathname === '/gyms/gymedit') {
    nav = `/gyms/${gymsDetail.gymId}`;
  } else if (location.pathname === `/gyms/${gymsDetail.gymId}`) {
    nav = `/gyms`;
  }
  return (
    <div className="h-[36px]">
      <FiChevronLeft className={classes} onClick={() => navigate(nav)} />
    </div>
  );
}

export default BackButton;
