import HeartButton from './Button/HeartButton';

function HeartContainer() {
  return (
    <div className="flex items-center">
      <HeartButton />
      <span className="ml-0.5 text-[var(--second)]">100</span>
    </div>
  );
}

export default HeartContainer;
