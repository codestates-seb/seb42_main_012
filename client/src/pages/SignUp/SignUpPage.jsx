import Header from '../components/layouts/Header/Header';
import Main from '../components/layouts/Main/Main';
import Nav from '../components/layouts/Nav/Nav';
import SignUpStep1 from '../components/SignUp/SignUpStep1';

function SignUpPage() {
  return (
    <>
      <Header titleText="SIGN UP" />
      <Main>
        <SignUpStep1 />
      </Main>
      <Nav />
    </>
  );
}

export default SignUpPage;
