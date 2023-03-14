function MyPageButton({ text }) {
  return (
    <li className="z-10 flex-auto w-1/3">
      <button
        type="button"
        className="flex flex-col items-center justify-center w-full p-8"
      >
        {/* TODO: 카운트 동적으로 변수지정 */}
        <span className="text-2xl font-bold">20</span>
        <span className="w-20 text-xs">{text}</span>
      </button>
    </li>
  );
}

export default MyPageButton;
