import Comment from './Comment';

function CommentList() {
  return (
    <>
      <div className="mt-5">
        <Comment />
        <div className="w-full border-[0.3px] border-[var(--second-border)] mt-3" />
      </div>
    </>
  );
}

export default CommentList;
