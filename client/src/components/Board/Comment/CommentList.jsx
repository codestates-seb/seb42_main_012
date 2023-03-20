// import Comment from './Comment';
// import CommentHeader from './CommentHeader';
import CommentBody from './CommentBody';

function CommentList({ comments }) {
  return (
    <ul className="mt-5">
      {/* {members.map(member => (
        <>
          <CommentHeader
            key={member.memberID}
            id={member.memberID}
            displayName={member.displayName}
            profileImage={member.profileImage}
          /> */}
      {comments.map(comment => (
        <>
          <CommentBody
            key={comment.commentId}
            id={comment.commentId}
            comment={comment.comment}
          />
          <div className="w-full border-[0.3px] border-[#d9d9d9] mt-3" />
        </>
      ))}

      {/* </> */}
      {/* ))} */}
    </ul>
  );
}

export default CommentList;
