import { AiOutlineSearch } from 'react-icons/ai';
import TextInput from '../UI/TextInput';

function BoardSearchContainer() {
  return (
    <div className="flex">
      <AiOutlineSearch className="w-6 h-6 " />
      <div className="ml-2 flex rounded-full w-full border border-[#D9D9D9]">
        <TextInput />
      </div>
    </div>
  );
}

export default BoardSearchContainer;
