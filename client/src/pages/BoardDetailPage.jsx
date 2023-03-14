import Header from '../components/layouts/Header/Header';
import Main from '../components/layouts/Main/Main';
import Nav from '../components/layouts/Nav/Nav';

function BoardDetailPage() {
  return (
    <>
      <Header titleText="BOARD" />
      <Main>
        <h2>커뮤니티 상세페이지</h2>
      </Main>
      <Nav />
    </>
  );
}

export default BoardDetailPage;
