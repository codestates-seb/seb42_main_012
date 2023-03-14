import Header from '../components/layouts/Header/Header';
import Main from '../components/layouts/Main/Main';
import BoardPost from '../components/UI/Board/BoardPost';

function BoardPostPage() {
  return (
    <>
      <Header titleText="게시글 작성" />
      <Main>
        <BoardPost />
      </Main>
    </>
  );
}

export default BoardPostPage;
