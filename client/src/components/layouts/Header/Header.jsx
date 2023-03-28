import { useLocation, useParams } from 'react-router-dom';
import HeaderTitle from '../../UI/Title/HeaderTitle';
import BackButton from '../../UI/Button/BackButton';
import PostButton from '../../UI/Button/PostButton';
import MoreButton from '../../UI/Button/MoreButton';
import LogoutButton from '../../UI/Button/LogoutButton';
import useMyStore from '../../../state/useMyStore';
// import useGymStore from '../../../state/useGymStore';
// import useMyStore from '../../../state/useMyStore';
// import useGymStore from '../../../state/useGymStore';

function Header() {
  const { myElements } = useMyStore();
  // const { gymsDetail } = useGymStore();
  const param = useParams();
  const location = useLocation();
  const path = location.pathname;

  const defaultClass =
    'sticky top-0 z-10 flex items-center justify-between w-full py-5 px-2 bg-[#fff]';

  switch (path) {
    case '/gyms':
      return (
        <header className={defaultClass}>
          <BackButton />
          <HeaderTitle titleText="GYM" />
          {myElements.role === 'OWNER' ? (
            <PostButton memberId={myElements.memberId} nav="/gyms/gympost" />
          ) : (
            <div className="w-0 h-0 ml-[36px]" />
          )}
        </header>
      );
    case `/gyms/${param.id}`:
      return (
        <header className={defaultClass}>
          <BackButton />
          <HeaderTitle titleText="GYM" />
          {myElements.role === 'OWNER' ? (
            <MoreButton memberId={myElements.memberId} />
          ) : (
            <div className="w-0 h-0 ml-[36px]" />
          )}
        </header>
      );
    case '/board':
      return (
        <header className={defaultClass}>
          <BackButton />
          <HeaderTitle titleText="BOARD" />
          <PostButton nav="/board/boardpost" />
        </header>
      );
    case `/board/${param.id}`:
      return (
        <header className={defaultClass}>
          <BackButton />
          <HeaderTitle titleText="BOARD" />
          <MoreButton />
        </header>
      );
    case '/gyms/gympost':
    case '/gyms/gymedit':
      return (
        <header className={defaultClass}>
          <BackButton />
          <HeaderTitle titleText="헬스장 등록" />
          <div className="w-0 h-0 ml-[36px]" />
        </header>
      );
    case '/board/boardpost':
    case '/board/boardedit':
      return (
        <header className={defaultClass}>
          <BackButton />
          <HeaderTitle titleText="게시글 등록" />
          <div className="w-0 h-0 ml-[36px]" />
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
          <HeaderTitle titleText="MY" />
          <div>
            <LogoutButton />
          </div>
        </header>
      );
    case '/my/info/password':
    case '/my/info/accountDelete':
      return (
        <header className={defaultClass}>
          <BackButton />
          <HeaderTitle titleText="MY" />
          <div className="w-0 h-0 ml-[36px]" />
        </header>
      );
    case '/login':
      return (
        <header className={defaultClass}>
          <div className="w-0 h-0 mr-[36px]" />
          <HeaderTitle titleText="LOGIN" />
          <div className="w-0 h-0 ml-[36px]" />
        </header>
      );
    case '/signup':
      return (
        <header className={defaultClass}>
          <BackButton />
          <HeaderTitle titleText="SIGNUP" />
          <div className="w-0 h-0 ml-[36px]" />
        </header>
      );
    case `/gyms/${param.id}/reviews`:
      return (
        <header className={defaultClass}>
          <BackButton />
          <HeaderTitle titleText="REVIEW" />
          <div className="w-0 h-0 ml-[36px]" />
        </header>
      );
    default:
      return (
        <header className={defaultClass}>
          <BackButton />
          <HeaderTitle titleText="" />
          <div className="w-0 h-0 ml-[36px]" />
        </header>
      );
  }
}

export default Header;
