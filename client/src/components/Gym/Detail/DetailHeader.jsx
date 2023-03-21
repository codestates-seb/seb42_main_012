import HeartContainer from '../../UI/HeartContainer';
import ReviewScore from '../Review/ReviewScore';

function GymDetailHeader({ gymName, BookmarkCnt }) {
  return (
    <div className="flex items-center mb-2">
      <h3 className="text-xl font-bold mr-1]">{gymName}</h3>
      <ReviewScore />
      <HeartContainer BookmarkCnt={BookmarkCnt} />
    </div>
  );
}

export default GymDetailHeader;
