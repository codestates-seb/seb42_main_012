import HeartContainer from '../../UI/HeartContainer';
import ReviewScore from '../Review/ReviewScore';

function GymDetailHeader({ gymName, gymBookmarkCnt }) {
  return (
    <div className="flex items-center">
      <h3 className="text-xl font-bold mr-1 text-[var(--second)]">{gymName}</h3>
      <ReviewScore />
      <HeartContainer gymBookmarkCnt={gymBookmarkCnt} />
    </div>
  );
}

export default GymDetailHeader;
