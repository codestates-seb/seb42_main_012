function BoardTabButton({ text }) {
  // 쓰이지 않는 버튼
  return (
    <li>
      <div className="border border-[var(--second)] rounded-full w-24 list-none flex justify-center mr-2">
        <span className="text-[var(--second)]">{text}</span>
      </div>
    </li>
  );
}

export default BoardTabButton;
