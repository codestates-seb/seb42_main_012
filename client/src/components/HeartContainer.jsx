import HeartButton from './UI/HeartButton';

function HeartContainer() {
  return (
    <div className="flex items-center">
      <HeartButton />
      <span className="ml-0.5 text-[#505050]">100</span>
    </div>
  );
}

export default HeartContainer;
