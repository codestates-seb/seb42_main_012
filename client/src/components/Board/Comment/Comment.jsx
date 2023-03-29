import useBoardStore from '../../../state/useBoardStore';

function Comment() {
  const { comments } = useBoardStore();
  return (
    <div>
      <span className="text-[var(--main)]">{comments.comment}</span>
    </div>
  );
}

export default Comment;
