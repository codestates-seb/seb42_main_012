import HeartButton from './Button/HeartButton';

function HeartContainer({ BookmarkCnt }) {
  return (
    <div className="flex items-center">
      <div className="mt-1">
        <HeartButton />
      </div>
      <span className="ml-0.5 text-[var(--second)]">{BookmarkCnt}</span>
    </div>
  );
}

export default HeartContainer;
