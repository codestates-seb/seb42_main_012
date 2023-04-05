function CommentHeader({ profileImage }) {
  return (
    <div className="flex items-start mr-4">
      <img
        className="object-cover w-10 h-10 rounded-full"
        src={profileImage}
        alt="profileImage"
      />
    </div>
  );
}

export default CommentHeader;
