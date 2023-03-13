import HeaderTitle from '../../UI/HeaderTitle';
import BackButton from '../../UI/BackButton';
import PostButton from '../../UI/PostButton';
// import EditButton from '../UI/EditButton';

function Header({ titleText }) {
  const defaultClass =
    'fixed top-0 flex items-center justify-between w-full pt-10 px-5 bg-[#fff]';

  return (
    <header className={defaultClass}>
      {/* //TODO: 컴포넌트별 다른 버튼 보이도록 삼항연산자 추가 */}
      <BackButton />
      <HeaderTitle titleText={titleText} />
      {/* <div>.</div> */}
      <PostButton />
      {/* <EditButton /> */}
    </header>
  );
}

export default Header;
