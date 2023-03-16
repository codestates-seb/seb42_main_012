function BoardInfo() {
  return (
    <div className="flex items-center justify-between mt-2">
      <div>
        <span className="text-[#fca43b] text-sm mr-2">자유게시판</span>
        <span className="text-[#D9d9d9] text-xs">1초전</span>
      </div>
      <span className="text-[#D9d9d9] text-xs">조회수0</span>
    </div>
  );
}

export default BoardInfo;
