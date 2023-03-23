import { useEffect } from 'react';
import api from '../../utils/api';
import useStore from '../../state/useStore';
import MyPageList from '../../components/My/MyPageList';
import MyAccount from '../../components/My/MyAccount';
import Profile from '../../components/My/Profile';

function MyPage() {
  const { setMyElements } = useStore();
  useEffect(() => {
    api.get('/members/my').then(res => setMyElements(res.data));
  }, []);

  return (
    <>
      <Profile />
      <MyPageList />
      <MyAccount />
    </>
  );
}

export default MyPage;
