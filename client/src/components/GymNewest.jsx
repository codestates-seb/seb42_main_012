import HeartButton from './UI/HeartButton';

function GymNewest({ gymName }) {
  return (
    <li className="mr-1 h-[160px]">
      <div className=" bg-grey w-[160px] h-[130px] rounded-md" />
      <div className="flex items-center justify-between">
        <span className="text-[14px]">{gymName}</span>
        <HeartButton />
      </div>
    </li>
  );
}

export default GymNewest;
