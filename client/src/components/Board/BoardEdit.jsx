import BasicButton from '../UI/BasicButton';
import BoardTapList from './BoardTabList';
import BoardPostBody from './Post/BoardPostBody';
import BoardPostTitle from './Post/BoardPostTitle';

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
