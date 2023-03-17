import { useLocation, useParams } from 'react-router-dom';
import HeaderTitle from '../../UI/HeaderTitle';
import BackButton from '../../UI/Button/BackButton';
import PostButton from '../../UI/Button/PostButton';
import CompleteButton from '../../UI/Button/CompleteButton';
import AlertButton from '../../UI/Button/AlertButton';
import MoreButton from '../../UI/Button/MoreButton';

function Header({ titleText, nav }) {
  const param = useParams();
  const location = useLocation();
  const path = location.pathname;

  const defaultClass =
    'fixed top-0 z-10 flex items-center justify-between w-full pt-10 px-2 bg-[#fff]';

  switch (path) {
    case '/gyms':
    case '/board':
      return (
        <header className={defaultClass}>
          <BackButton />
          <HeaderTitle titleText={titleText} />
          <PostButton nav={nav} />
        </header>
      );
    case `/gyms/${param.id}`:
    case '/board/:id':
      return (
        <header className={defaultClass}>
          <BackButton />
          <HeaderTitle titleText={titleText} />
          <MoreButton nav={nav} />
        </header>
      );
    case '/gyms/gympost':
    case '/board/boardpost':
    case '/board/boardedit':
      return (
        <header className={defaultClass}>
          <BackButton />
          <HeaderTitle titleText={titleText} />
          <CompleteButton nav={nav} />
        </header>
      );
    case '/my':
    case '/my/board':
    case '/my/comments':
    case '/my/reviews':
    case '/my/bookmarks/board':
    case '/my/bookmarks/gyms':
      return (
        <header className={defaultClass}>
          <BackButton />
          <HeaderTitle titleText={titleText} />
          <AlertButton nav={nav} />
        </header>
      );
    default:
      return (
        <header className={defaultClass}>
          <BackButton />
          <HeaderTitle titleText={titleText} />
          <div className="w-0 h-0 ml-[36px]" />
        </header>
      );
  }
}

export default Header;
