// import DisplayName from '../../UI/DisplayName/DisplayName';
// import ProfileImg from '../../UI/ProfileImg/ProfileImg';
import CommentContainer from './CommentContainer';

function CommentHeader({ displayName }) {
  return (
    <li className="flex items-center justify-between">
      <div className="flex">
        {/* {profileImage} */}
        <div className="mt-1">{displayName}</div>
      </div>
      <CommentContainer />
    </li>
  );
}

export default CommentHeader;
