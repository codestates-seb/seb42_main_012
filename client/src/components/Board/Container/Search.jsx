import { AiOutlineSearch } from 'react-icons/ai';
import TextInput from '../../UI/Input/TextInput';

function BoardSearchContainer() {
  return (
    <div className="flex items-center w-full bg-[#fff] top-[100px]">
      <AiOutlineSearch className="mr-2 text-2xl" />
      <TextInput
        classname="w-full py-1 px-2 border border-[var(--second-border)] rounded-xl focus:outline-[var(--main)]"
        inputId="search"
        placeholder="search..."
      />
    </div>
  );
}

export default BoardSearchContainer;
