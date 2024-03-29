import { BiTimeFive } from 'react-icons/bi';
import GymDetailTitle from '../Detail/DetailTitle';
import GymHoursContainer from './HoursContainer';

function GymHours({ businessHours }) {
  return (
    <div className="flex flex-col mt-4">
      <GymDetailTitle titleText="운영시간">
        <div className="text-xl">
          <BiTimeFive />
        </div>
      </GymDetailTitle>
      <GymHoursContainer businessHours={businessHours} />
    </div>
  );
}

export default GymHours;
