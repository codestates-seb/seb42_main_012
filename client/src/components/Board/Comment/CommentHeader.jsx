import DisplayName from '../../UI/DisplayName/DisplayName';
import ProfileImg from '../../UI/ProfileImg/ProfileImg';
import CommentContainer from './CommentContainer';

function CommentHeader({ displayName, imageUrl }) {
  return (
    <li className="flex items-center justify-between">
      <div className="flex">
        <ProfileImg page="board" src={imageUrl} alt="profileImage" />
        <DisplayName className="mt-1">{displayName}</DisplayName>
      </div>
      <CommentContainer />
    </li>
  );
}

export default CommentHeader;
