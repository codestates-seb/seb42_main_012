import HeartContainer from '../../HeartContainer';
import BoardHeaderContainer from '../BoardHeaderContainer';

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
