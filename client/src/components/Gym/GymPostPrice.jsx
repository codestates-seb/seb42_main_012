import { BsDot } from 'react-icons/bs';
import TextInput from '../UI/TextInput';

function GymPostPrice() {
  return (
    <div className="mb-8">
      <p className="mt-2 mb-1 text-sm text-[#FCA43B]">대표가격</p>
      <div>
        <div className="flex items-center mb-2">
          <BsDot />
          <TextInput
            placeholder=" ex) 3개월 150,000원"
            classname="w-[19.5rem] ml-1 border rounded-md"
          />
        </div>
        <div className="flex items-center">
          <BsDot />
          <TextInput classname="ml-1 border rounded-md w-[19.6rem]" />
        </div>
      </div>
    </div>
  );
}

export default GymPostPrice;
