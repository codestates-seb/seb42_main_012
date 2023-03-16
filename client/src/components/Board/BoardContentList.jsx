import { Link } from 'react-router-dom';
import BoardInfo from './BoardInfo';

function BoardContentList({ to, classname }) {
  return (
    <>
      <Link to={to}>
        <li
          className={`px-4 py-8 border-b border-[#FCA43B] border-opacity-[10%] active:bg-[#FCA43B] active:bg-opacity-[10%] ${classname}`}
        >
          <p>글 제목 테스트 입니다.</p>
          <BoardInfo />
        </li>
      </Link>
    </>
  );
}

export default BoardContentList;