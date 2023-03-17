import BasicButton from '../UI/Button/BasicButton';
import BoardTapList from './Tab/TabList';
import BoardPostBody from './Post/PostBody';
import BoardPostTitle from './Post/PostTitle';

function BoardEdit() {
  return (
    <div className="border-t border-[#d9d9d9]">
      <BoardTapList />
      <BoardPostTitle />
      <BoardPostBody />
      <div className="ml-16 mt-72">
        <BasicButton page="board" text="사진 업로드" />
      </div>
    </div>
  );
}

export default BoardEdit;
