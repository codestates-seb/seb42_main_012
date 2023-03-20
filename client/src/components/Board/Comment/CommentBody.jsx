function CommentBody({ comment }) {
  return (
    <li className="ml-10">
      <p className="ml-4">{comment}</p>
      <span className="ml-4 text-sm text-[#d9d9d9]">34초전</span>
    </li>
  );
}

export default CommentBody;
