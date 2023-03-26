// import DisplayName from '../../UI/DisplayName/DisplayName';
// import ProfileImg from '../../UI/ProfileImg/ProfileImg';
import CommentContainer from './CommentContainer';

function CommentHeader({ displayName, imageUrl }) {
  return (
    <li className="flex items-center justify-between">
      <div className="flex">
        <img
          className="object-cover w-10 h-10"
          src={imageUrl}
          alt="profileImage"
        />
        <span className="mt-2 ml-4 mr-1 font-medium text-md">
          {displayName}
        </span>
      </div>
      <CommentContainer />
    </li>
  );
}

export default CommentHeader;
