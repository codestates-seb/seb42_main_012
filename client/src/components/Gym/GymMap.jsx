import { IoLocationSharp } from 'react-icons/io5';
import GymDetailTitle from './GymDetailTitle';
import GymMapContainer from './GymMapContainer';

function GymMap() {
  return (
    <div className="flex flex-col mt-4">
      <GymDetailTitle titleText="지역정보">
        <div className="text-[20px]">
          <IoLocationSharp />
        </div>
      </GymDetailTitle>
      <span>충북 청주시 흥덕구 가경로 27 대양빌딩 4층</span>
      <GymMapContainer />
    </div>
  );
}

export default GymMap;
