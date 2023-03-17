import { BsDot } from 'react-icons/bs';
import TextInput from '../../UI/Input/TextInput';

function GymPostPrice() {
  return (
    <div className="mb-8">
      <p className="mt-2 mb-1 text-sm text-[#FCA43B]">대표가격</p>
      <div>
        <div className="flex items-center mb-2">
          <BsDot />
          <TextInput
            placeholder=" ex) 3개월 150,000원"
            classname="w-full border rounded-md"
          />
        </div>
        <div className="flex items-center">
          <BsDot />
          <TextInput classname="w-full border rounded-md" />
        </div>
      </div>
    </div>
  );
}

export default GymPostPrice;
