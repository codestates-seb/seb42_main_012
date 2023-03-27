import boardStore from '../../../state/boardStore';

function Comment() {
  const { comments } = boardStore();
  return (
    <div>
      <span className="text-[var(--main)]">{comments.comment}</span>
    </div>
  );
}

export default Comment;
