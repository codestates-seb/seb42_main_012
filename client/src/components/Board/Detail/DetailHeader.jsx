import HeartContainer from '../../UI/HeartContainer';
import BoardHeaderContainer from '../Container/Header';

function BoardDetailHeader() {
  return (
    <div className="flex">
      <BoardHeaderContainer />
      <div className="mt-2 ml-[35%]">
        <HeartContainer />
      </div>
    </div>
  );
}

export default BoardDetailHeader;
