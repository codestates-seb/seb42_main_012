import { useLocation, useParams } from 'react-router-dom';
import HeaderTitle from '../../UI/HeaderTitle';
import BackButton from '../../UI/BackButton';
import PostButton from '../../UI/PostButton';
import EditButton from '../../UI/EditButton';
import CompleteButton from '../../UI/CompleteButton';

function Header({ titleText, nav }) {
  const param = useParams();
  const location = useLocation();
  const path = location.pathname;

  const defaultClass =
    'fixed top-0 flex items-center justify-between w-full pt-10 px-2 bg-[#fff]';

  return (
    <header className={defaultClass}>
      <BackButton />
      <HeaderTitle titleText={titleText} />
      {path === '/gyms' || path === '/board' ? <PostButton nav={nav} /> : null}
      {path === `/gyms/${param.id}` || path === '/board/:id' ? (
        <EditButton nav={nav} />
      ) : null}
      {path === '/gyms/gympost' || path === '/board/boardpost' ? (
        <CompleteButton nav={nav} />
      ) : null}
    </header>
  );
}

export default Header;
