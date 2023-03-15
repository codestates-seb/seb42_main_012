import { Link } from 'react-router-dom';
import BoardInfo from './BoardInfo';

function BoardBasicButton() {
  return (
    <Link to="/board/:id">
      <div className="mt-5 border-t border-[#d9d9d9]">
        <p className="mt-4 mb-3 ml-4">글 제목 테스트 입니다.</p>
      </div>
      <BoardInfo />
    </Link>
  );
}

export default BoardBasicButton;
