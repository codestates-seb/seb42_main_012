import Header from '../components/layouts/Header/Header';
import Main from '../components/layouts/Main/Main';
import Nav from '../components/layouts/Nav/Nav';
import MyPageList from '../components/MyPageList';
import MyAccount from '../components/MyAccount';
import Profile from '../components/Profile';

function MyDetailPage() {
  return (
    <>
      <Header titleText="MY" />
      <Main>
        <Profile />
        <MyPageList />
        <MyAccount />
      </Main>
      <Nav />
    </>
  );
}

export default MyDetailPage;
