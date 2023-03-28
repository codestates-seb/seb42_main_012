import MyPageList from '../../components/My/MyPageList';
import MyAccount from '../../components/My/MyAccount';
import Profile from '../../components/My/Profile';
import useMyStore from '../../state/useMyStore';
// import validate from '../../utils/validate';

function MyPage() {
  const { myElements } = useMyStore();
  return (
    <div className="h-full mb-20">
      <Profile />
      {myElements.role === 'USER' && <MyPageList />}
      <MyAccount />
    </div>
  );
}

export default MyPage;
