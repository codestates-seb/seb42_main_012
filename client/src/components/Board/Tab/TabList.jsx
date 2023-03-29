import { useState } from 'react';
import TabButton from '../../UI/Button/TabButton';

function BoardTapList() {
  const tabName = [
    '전체',
    '자유게시판',
    '꿀팁',
    '오운완인증',
    '자세피드백',
    '파트너모집',
  ];
  const tabId = [0, 1, 2, 3, 4, 5];
  const [filterOn, setFilterOn] = useState([
    true,
    false,
    false,
    false,
    false,
    false,
  ]);

  return (
    <ul className="flex mt-4 overflow-x-scroll scrollbar-hide">
      {tabName.map((tab, idx) => (
        <TabButton
          key={idx}
          tabName={tab}
          idx={idx}
          filter={tabId[idx]}
          setFilterOn={setFilterOn}
          filterOn={filterOn}
          classname={
            filterOn[idx]
              ? 'border-orange w-24 rounded-full flex justify-center mr-2 text-white bg-orange border'
              : 'border border-[var(--second)] w-24 rounded-full flex justify-center mr-2 text-[var(--second)]'
          }
        />
      ))}
    </ul>
  );
}

export default BoardTapList;
