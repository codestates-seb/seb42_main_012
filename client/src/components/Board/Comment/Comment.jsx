import CommentBody from './CommentBody';
// import CommentHeader from './CommentHeader';

function Comment({ comment }) {
  return <CommentBody comment={comment} />;
}

export default Comment;

// {members.map(member => (
//   <CommentHeader
//     key={member.memberID}
//     id={member.memberID}
//     displayName={member.displayName}
//     profileImage={member.profileImage}
//   />
// ))}
