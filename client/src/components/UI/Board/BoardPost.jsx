import BoardTabList from './BoardTabList';
import BoardPostTitle from './BoardPostTitle';
import BoardPostBody from './BoardPostBody';

function BoardPost() {
  return (
    <div className="border-t border-[#d9d9d9]">
      <BoardTabList />
      <BoardPostTitle />
      <BoardPostBody />
    </div>
  );
}

export default BoardPost;
