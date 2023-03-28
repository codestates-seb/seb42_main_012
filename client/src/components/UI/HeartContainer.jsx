import HeartButton from './Button/HeartButton';

function HeartContainer({ bookmarkCnt, isBookmarked, gymId }) {
  return (
    <div className="flex items-center">
      <div className="mt-1">
        <HeartButton
          bookmarkCnt={bookmarkCnt}
          isBookmarked={isBookmarked}
          gymId={gymId}
        />
      </div>
      <span className="ml-0.5 text-[var(--second)]">{bookmarkCnt}</span>
    </div>
  );
}

export default HeartContainer;
