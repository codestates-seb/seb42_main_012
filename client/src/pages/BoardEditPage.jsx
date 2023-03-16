import BoardEdit from '../components/Board/BoardEdit';
import Header from '../components/layouts/Header/Header';
import Main from '../components/layouts/Main/Main';
import Nav from '../components/layouts/Nav/Nav';

function BoardEditPage() {
  return (
    <>
      <Header titleText="게시글 수정" nav="/board" />
      <Main>
        <BoardEdit />
      </Main>
      <Nav />
    </>
  );
}

export default BoardEditPage;
