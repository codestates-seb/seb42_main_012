function MyDetailTitle() {
  return (
    <div className="flex items-center justify-between px-4 mb-8 font-bold">
      {/* TODO: 타이틀, 카운트 동적으로 변경 */}
      <h2>타이틀</h2>
      <span className="text-[var(--main)]">(0)</span>
    </div>
  );
}

export default MyDetailTitle;
