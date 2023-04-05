// import { useEffect } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
// import { useParams } from 'react-router-dom';
// import TextInput from '../../UI/Input/TextInput';
import api from '../../../utils/api';
import useBoardStore from '../../../state/useBoardStore';

function BoardSearchContainer() {
  const { setBoards } = useBoardStore();
  // const params = useParams();

  const handleKeyPress = event => {
    api
      .get(`/communities/search?keyword=${event.target.value}&lastFeedId=`)
      .then(res => {
        setBoards(res.data.contents);
      });
  };

  return (
    <div className="flex items-center w-full bg-[#fff] top-[100px]">
      <AiOutlineSearch className="mr-2 text-2xl" />

      <input
        className="w-full py-1 px-2 border border-[var(--second-border)] rounded-xl focus:outline-[var(--main)]"
        placeholder="search..."
        onChange={event => handleKeyPress(event)}
      />
    </div>
  );
}

export default BoardSearchContainer;
