import { BiTimeFive } from 'react-icons/bi';
import GymDetailTitle from './GymDetailTitle';

function GymHours() {
  return (
    <div className="flex">
      <GymDetailTitle titleText="운영시간">
        <div className="text-[20px]">
          <BiTimeFive />
        </div>
      </GymDetailTitle>
    </div>
  );
}

export default GymHours;
