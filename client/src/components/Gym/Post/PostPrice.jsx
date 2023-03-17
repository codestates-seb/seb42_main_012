import { BsDot } from 'react-icons/bs';
import TextInput from '../../UI/Input/TextInput';

function GymPostPrice() {
  return (
    <div className="mb-8">
      <p className="mt-2 mb-1 text-sm text-[var(--main)]">대표가격</p>
      <div>
        <div className="flex items-center mb-2">
          <BsDot />
          <TextInput
            placeholder="ex) 3개월 150,000원"
            classname="border border-[var(--second-border)] outline-[var(--main)] mt-2 rounded-sm w-full p-2"
          />
        </div>
        <div className="flex items-center">
          <BsDot />
          <TextInput
            placeholder="ex) 6개월 350,000원"
            classname="border border-[var(--second-border)] outline-[var(--main)] mt-2 rounded-sm w-full p-2"
          />
        </div>
      </div>
    </div>
  );
}

export default GymPostPrice;
