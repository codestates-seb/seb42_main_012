import BasicButton from '../UI/Button/BasicButton';
import BoardTapList from './Tab/TabList';
import BoardPostBody from './Post/PostBody';
import BoardPostTitle from './Post/PostTitle';

function BoardEdit() {
  return (
    <div className="border-t border-[var(--second-border)]">
      <BoardTapList />
      <BoardPostTitle />
      <BoardPostBody />
      <BasicButton page="board" text="Edit" nav="/board" />
    </div>
  );
}

export default BoardEdit;
