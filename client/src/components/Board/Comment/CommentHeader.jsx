import DisplayName from '../../UI/DisplayName';
import ProfileImg from '../../UI/ProfileImg';
import CommentContainer from './CommentContainer';

function CommentHeader() {
  return (
    <div className="flex">
      <div className="flex">
        <div>
          <div className="flex">
            <ProfileImg page="board" />
            <div className="mt-1">
              <DisplayName />
            </div>
          </div>
        </div>
      </div>
      <CommentContainer />
    </div>
  );
}

export default CommentHeader;
