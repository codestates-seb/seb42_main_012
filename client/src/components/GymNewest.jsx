import HeartButton from './UI/HeartButton';

function GymNewest() {
  return (
    <li className="mr-1 h-[165px]">
      <div className=" bg-grey w-[160px] h-[130px]" />
      <div className="flex items-center justify-between">
        <h3 className="text-[12px]">스마트짐</h3>
        <HeartButton />
      </div>
    </li>
  );
}

export default GymNewest;
