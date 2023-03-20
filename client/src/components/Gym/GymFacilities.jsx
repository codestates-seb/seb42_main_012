import { FaShower } from 'react-icons/fa';
import GymDetailTitle from './Detail/DetailTitle';
import GymTagList from './List/GymTagList';

function GymFacilities({ facilities }) {
  return (
    <div className="border-b border-[var(--second-border)]">
      <GymDetailTitle titleText="편의시설">
        <div className="mr-0.5">
          <FaShower />
        </div>
      </GymDetailTitle>
      <GymTagList facilities={facilities} />
    </div>
  );
}

export default GymFacilities;
