import HeartContainer from '../../HeartContainer';
import BoardHeaderContainer from '../BoardHeaderContainer';

function BoardDetailHeader() {
  return (
    <div className="flex">
      <BoardHeaderContainer />
      <HeartContainer />
    </div>
  );
}

export default BoardDetailHeader;
