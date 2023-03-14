import Header from '../components/layouts/Header/Header';
import Main from '../components/layouts/Main/Main';
import Nav from '../components/layouts/Nav/Nav';
import MyPageList from '../components/My/MyPageList';
import MyAccount from '../components/My/MyAccount';
import Profile from '../components/My/Profile';

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
