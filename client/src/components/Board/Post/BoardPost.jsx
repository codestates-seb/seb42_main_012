import BoardTapList from '../BoardTabList';
import BoardPostTitle from './BoardPostTitle';
import BoardPostBody from './BoardPostBody';
import BasicButton from '../../UI/BasicButton';

function BoardPost() {
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

export default BoardPost;
