function BoardInfo() {
  return (
    <div className="flex items-center justify-between mt-2">
      <div>
        <span className="text-[var(--main)] text-sm mr-2">자유게시판</span>
        <span className="text-[var(--second)] text-xs">1초전</span>
      </div>
      <span className="text-[var(--second)] text-xs">조회수0</span>
    </div>
  );
}

export default BoardInfo;
