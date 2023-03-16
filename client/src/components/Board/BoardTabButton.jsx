function BoardTabButton({ text }) {
  // 쓰이지 않는 버튼
  return (
    <li>
      <div className="border border-[#575757] rounded-full w-[80px] list-none  flex justify-center mr-2">
        <span className="text-[#575757]">{text}</span>
      </div>
    </li>
  );
}

export default BoardTabButton;
