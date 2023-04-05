import { useState } from 'react';
import BoardEditTabButton from './BoardEditTabButton';

function BoardEditTabList({ setTabId }) {
  const tabName = ['자유게시판', '꿀팁', '자세피드백', '파트너모집'];
  const tabId = [1, 2, 4, 5];
  const [filterOn, setFilterOn] = useState([true, false, false, false, false]);

  return (
    <>
      <ul className="flex my-4 overflow-x-scroll scrollbar-hide">
        {tabName.map((tab, idx) => (
          <BoardEditTabButton
            key={idx}
            tabName={tab}
            idx={idx}
            filter={tabId[idx]}
            setFilterOn={setFilterOn}
            filterOn={filterOn}
            setTabId={setTabId}
            classname={
              filterOn[idx]
                ? 'border-orange w-24 rounded-full flex justify-center mr-2 text-white bg-orange border'
                : 'border border-[var(--second)] w-24 rounded-full flex justify-center mr-2 text-[var(--second)]'
            }
          />
        ))}
      </ul>
    </>
  );
}

export default BoardEditTabList;
