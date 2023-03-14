import Header from '../components/layouts/Header/Header';
import Main from '../components/layouts/Main/Main';
import Nav from '../components/layouts/Nav/Nav';

function BoardPage() {
  return (
    <>
      <Header titleText="BOARD" />
      <Main>
        <h2>커뮤니티 페이지입니다.</h2>
      </Main>
      <Nav />
    </>
  );
}

export default BoardPage;
