import { BsFillTelephoneFill } from 'react-icons/bs';
import GymDetailTitle from './GymDetailTitle';
import GymPhoneNumberContainer from './GymPhoneNumberContainer';

function GymPhoneNumber() {
  return (
    <div className="flex flex-col mt-4">
      <GymDetailTitle titleText="전화번호">
        <div className="text-[20px]">
          <BsFillTelephoneFill />
        </div>
      </GymDetailTitle>
      <GymPhoneNumberContainer />
    </div>
  );
}

export default GymPhoneNumber;
