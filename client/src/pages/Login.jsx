import Header from '../components/layouts/Header/Header';
import Main from '../components/layouts/Main/Main';
import Nav from '../components/layouts/Nav/Nav';

function Login() {
  return (
    <>
      <Header titleText="LOGIN" />
      <Main>
        <h2>로그인 홈페이지입니다</h2>
      </Main>
      <Nav />
    </>
  );
}

export default Login;
