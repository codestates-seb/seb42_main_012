import Header from '../components/layouts/Header/Header';
import Main from '../components/layouts/Main/Main';
import Nav from '../components/layouts/Nav/Nav';

function BoardEditPage() {
  return (
    <>
      <Header titleText="BOARD" />
      <Main>
        <h2>커뮤니티 수정페이지</h2>
      </Main>
      <Nav />
    </>
  );
}

export default BoardEditPage;
