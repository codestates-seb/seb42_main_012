// import HeartContainer from '../../UI/HeartContainer';
import BoardHeaderContainer from '../Container/Header';

function DetailHeader() {
  return (
    <div className="flex items-center justify-between">
      <BoardHeaderContainer />

      {/* <div className="mt-2">
        <HeartContainer bookmarkCnt={bookmarkCnt} />
      </div> */}
    </div>
  );
}

export default DetailHeader;
