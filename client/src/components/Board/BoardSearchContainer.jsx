import { AiOutlineSearch } from 'react-icons/ai';
import TextInput from '../UI/TextInput';

function BoardSearchContainer() {
  return (
    <div className="flex items-center w-full bg-white top-[100px]">
      <AiOutlineSearch className="mr-2 text-2xl" />
      <TextInput
        classname="w-full py-1 px-2 border border-[#D9D9D9] rounded-xl focus:outline-[#FCA43B]"
        inputId="search"
        placeholder="search..."
      />
    </div>
  );
}

export default BoardSearchContainer;
