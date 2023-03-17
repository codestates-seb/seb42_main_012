import Header from '../../components/layouts/Header/Header';
import Main from '../../components/layouts/Main/Main';
import Nav from '../../components/layouts/Nav/Nav';
import Login from '../../components/Login/Login';

function LoginPage() {
  return (
    <>
      <Header titleText="LOGIN" />
      <Main>
        <Login />
      </Main>
      <Nav />
    </>
  );
}

export default LoginPage;
