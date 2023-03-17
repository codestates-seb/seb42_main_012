import HeartContainer from '../../UI/HeartContainer';
import BoardHeaderContainer from '../Container/Header';

function BoardDetailHeader() {
  return (
    <div className="flex items-center justify-between">
      <BoardHeaderContainer />
      <div className="mt-2">
        <HeartContainer />
      </div>
    </div>
  );
}

export default BoardDetailHeader;
