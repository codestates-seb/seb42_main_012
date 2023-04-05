import { useState } from 'react';
import TabButton from '../../UI/Button/TabButton';

function BoardPostTapList({ setTabId }) {
  const tabName = ['자유게시판', '꿀팁', '자세피드백', '파트너모집'];
  const tabId = [1, 2, 4, 5];
  const [filterOn, setFilterOn] = useState([true, false, false, false]);

  return (
    <>
      <span className="text-2xl font-bold">Tab</span>
      <ul className="flex mt-2 overflow-x-scroll scrollbar-hide">
        {tabName.map((tab, idx) => (
          <TabButton
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

export default BoardPostTapList;
