import Header from '../components/layouts/Header/Header';
import Main from '../components/layouts/Main/Main';
import Nav from '../components/layouts/Nav/Nav';

function HomePage() {
  return (
    <>
      <Header titleText="HOME" />
      <Main>
        <h2>메인 홈페이지입니다</h2>
      </Main>
      <Nav />
    </>
  );
}

export default HomePage;
