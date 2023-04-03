function BoardDetailImage({ contentImages }) {
  return (
    <div className="mb-2">
      {contentImages.length === 0 ? null : (
        <img src={contentImages} alt="" className="object-cover w-80 h-72" />
      )}
    </div>
  );
}

export default BoardDetailImage;
