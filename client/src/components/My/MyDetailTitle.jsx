function MyDetailTitle() {
  return (
    <div className="flex items-center justify-between mb-8 font-bold">
      {/* TODO: h2 동적으로 변경 */}
      <h2>내가 쓴 글</h2>
      <span className="text-[#FCA43B]">(20)</span>
    </div>
  );
}

export default MyDetailTitle;
