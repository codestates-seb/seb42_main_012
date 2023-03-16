import DisplayName from '../../UI/DisplayName';
import ProfileImg from '../../UI/ProfileImg';
import CommentContainer from './CommentContainer';

function CommentHeader() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex">
        <ProfileImg page="board" />
        <div className="mt-1">
          <DisplayName />
        </div>
      </div>
      <CommentContainer />
    </div>
  );
}

export default CommentHeader;
