import HeartContainer from '../../UI/HeartContainer';
import ReviewScore from '../Review/ReviewScore';

function GymDetailHeader({ gymName, gymBookmarkCnt, isBookmarked, gymId }) {
  return (
    <div className="flex items-center mb-2">
      <h3 className="text-xl font-bold mr-1]">{gymName}</h3>
      <ReviewScore />
      <HeartContainer
        gymBookmarkCnt={gymBookmarkCnt}
        isBookmarked={isBookmarked}
        gymId={gymId}
      />
    </div>
  );
}

export default GymDetailHeader;
