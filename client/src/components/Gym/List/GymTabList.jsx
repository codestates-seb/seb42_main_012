import TabButton from '../../UI/Button/TabButton';

function GymTabList({ filters, filterOn, setFilterOn }) {
  const tabs = ['거리', '평점', '찜'];

  return (
    <ul className="flex pb-3 my-2">
      {tabs.map((tab, idx) => (
        <TabButton
          key={idx}
          tabName={tab}
          idx={idx}
          filter={filters[idx]}
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

export default GymTabList;
