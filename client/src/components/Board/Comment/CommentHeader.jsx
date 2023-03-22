import DisplayName from '../../UI/DisplayName/DisplayName';
import ProfileImg from '../../UI/ProfileImg/ProfileImg';
import CommentContainer from './CommentContainer';
import useStore from '../../../state/useStore';

function CommentHeader({ comment }) {
  const { members } = useStore();

  const memberDetailId = members.filter(
    member => comment.memberId === member.memberId,
  );
  console.log(memberDetailId);

  return (
    <li className="flex items-center justify-between">
      <div className="flex">
        <ProfileImg
          page="board"
          src={memberDetailId[0].profileImage}
          alt="profileImage"
        />
        <DisplayName className="mt-1">
          {memberDetailId[0].displayName}
        </DisplayName>
      </div>
      <CommentContainer />
    </li>
  );
}

export default CommentHeader;
