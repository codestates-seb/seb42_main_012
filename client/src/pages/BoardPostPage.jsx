import Header from '../components/layouts/Header/Header';
import Main from '../components/layouts/Main/Main';
import BoardPost from '../components/Board/Post/BoardPost';

function BoardPostPage() {
  return (
    <>
      <Header titleText="게시글 작성" nav="/board" />
      <Main>
        <BoardPost />
      </Main>
    </>
  );
}

export default BoardPostPage;
