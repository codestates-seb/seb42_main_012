import BoardTapList from '../Tab/TabList';
import BoardPostTitle from './PostTitle';
import BoardPostBody from './PostBody';
import BasicButton from '../../UI/Button/BasicButton';

function BoardPost() {
  return (
    <div className="border-t border-[var(--second-border)]">
      <BoardTapList />
      <BoardPostTitle />
      <BoardPostBody />
      <div className="mt-10">
        <BasicButton page="board" text="Post" nav="/board" />
      </div>
    </div>
  );
}

export default BoardPost;
