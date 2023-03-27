import MyPageList from '../../components/My/MyPageList';
import MyAccount from '../../components/My/MyAccount';
import Profile from '../../components/My/Profile';
// import validate from '../../utils/validate';

function MyPage() {
  return (
    <>
      <Profile />
      <MyPageList />
      <MyAccount />
    </>
  );
}

export default MyPage;
