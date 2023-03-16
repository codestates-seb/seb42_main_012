import TabButton from '../UI/TabButton';

function GymTabList() {
  return (
    <ul className="flex pb-3 my-2">
      <TabButton text="거리" />
      <TabButton text="평점" />
      <TabButton text="찜" />
    </ul>
  );
}

export default GymTabList;
