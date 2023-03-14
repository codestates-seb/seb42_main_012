import { FaShower } from 'react-icons/fa';
import GymDetailTitle from './GymDetailTitle';
import GymTagList from './GymTagList';

function GymFacilities() {
  return (
    <div className="border-b border-lightGrey">
      <GymDetailTitle titleText="편의시설">
        <FaShower />
      </GymDetailTitle>
      <GymTagList />
    </div>
  );
}

export default GymFacilities;
