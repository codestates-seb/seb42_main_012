import TabButton from '../../UI/Button/TabButton';

function GymTabList() {
  return (
    <ul className="flex pb-3 my-2">
      <TabButton tabName="거리" />
      <TabButton tabName="평점" />
      <TabButton tabName="찜" />
    </ul>
  );
}

export default GymTabList;
