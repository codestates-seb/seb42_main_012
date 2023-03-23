import { IoLocationSharp } from 'react-icons/io5';
import GymDetailTitle from '../Detail/DetailTitle';
import GymMapContainer from './MapContainer';

function GymMap({ gymAddress }) {
  return (
    <div className="flex flex-col mt-4">
      <GymDetailTitle titleText="지역정보">
        <div className="text-xl">
          <IoLocationSharp />
        </div>
      </GymDetailTitle>
      <span className="text-sm">{gymAddress}</span>
      <GymMapContainer gymAddress={gymAddress} />
    </div>
  );
}

export default GymMap;
