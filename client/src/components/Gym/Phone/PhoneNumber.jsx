import { BsFillTelephoneFill } from 'react-icons/bs';
import GymDetailTitle from '../Detail/DetailTitle';
import GymPhoneNumberContainer from './PhoneNumberContainer';

function GymPhoneNumber({ phoneNumber }) {
  return (
    <div className="flex flex-col mt-4">
      <GymDetailTitle titleText="전화번호">
        <div className="text-xl">
          <BsFillTelephoneFill />
        </div>
      </GymDetailTitle>
      <GymPhoneNumberContainer phoneNumber={phoneNumber} />
    </div>
  );
}

export default GymPhoneNumber;
