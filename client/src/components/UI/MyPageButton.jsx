import { Link } from 'react-router-dom';

function MyPageButton({ to, text }) {
  return (
    <li className="z-10 flex-auto w-1/3">
      <Link
        to={to}
        className="flex flex-col items-center justify-center w-full p-8"
      >
        {/* TODO: 카운트 동적으로 변수지정 */}
        <span className="text-2xl font-bold">20</span>
        <span className="w-20 text-xs text-center">{text}</span>
      </Link>
    </li>
  );
}

export default MyPageButton;
