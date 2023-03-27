import HeartButton from './Button/HeartButton';

function HeartContainer({ bookmarkCnt }) {
  return (
    <div className="flex items-center">
      <div className="mt-1">
        <HeartButton bookmarkCnt={bookmarkCnt} />
      </div>
      <span className="ml-0.5 text-[var(--second)]">{bookmarkCnt}</span>
    </div>
  );
}

export default HeartContainer;
