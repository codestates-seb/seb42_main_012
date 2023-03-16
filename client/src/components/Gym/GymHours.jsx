import { BiTimeFive } from 'react-icons/bi';
import GymDetailTitle from './GymDetailTitle';
import GymHoursContainer from './GymHoursContainer';

function GymHours() {
  return (
    <div className="flex flex-col">
      <GymDetailTitle titleText="운영시간">
        <div className="text-[20px]">
          <BiTimeFive />
        </div>
      </GymDetailTitle>
      <GymHoursContainer />
    </div>
  );
}

export default GymHours;
