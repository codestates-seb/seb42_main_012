import BoardTapList from '../Tab/TabList';
import BoardPostTitle from './PostTitle';
import BoardPostBody from './PostBody';
import BasicButton from '../../UI/Button/BasicButton';

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
