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
      <GymHoursContainer
        offdays="정기휴무"
        opentime="07:00"
        closetime="23:30"
        lateopen="10:00"
        earlyclose="19:00"
      />
    </div>
  );
}

export default GymHours;
