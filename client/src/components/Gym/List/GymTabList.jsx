import TabButton from '../../UI/Button/TabButton';

function GymTabList() {
  const tabs = ['거리', '평점', '찜'];
  return (
    <ul className="flex pb-3 my-2">
      {tabs.map((tab, idx) => (
        <TabButton key={idx} tabName={tab} />
      ))}
    </ul>
  );
}

export default GymTabList;
