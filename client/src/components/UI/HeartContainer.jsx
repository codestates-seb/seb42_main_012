import HeartButton from './Button/HeartButton';

function HeartContainer({ gymBookmarkCnt, isBookmarked, gymId }) {
  return (
    <div className="flex items-center">
      <div className="mt-1">
        <HeartButton isBookmarked={isBookmarked} gymId={gymId} />
      </div>
      <span className="ml-0.5">{gymBookmarkCnt}</span>
    </div>
  );
}

export default HeartContainer;
