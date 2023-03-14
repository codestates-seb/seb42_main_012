import GymNewest from './GymNewest';

function GymNewestList() {
  const gymList = [
    {
      id: 1,
      gymName: '스마트짐',
    },
    {
      id: 2,
      gymName: '리미티드짐',
    },
    {
      id: 3,
      gymName: '에어핏',
    },
    {
      id: 4,
      gymName: '구름짐',
    },
  ];

  return (
    <div className="border-b border-[#CBCBCB]">
      <h2 className="text-[14px] font-bol">신규 헬스장</h2>
      <ul className="flex overflow-scroll">
        {gymList.map(gym => (
          <GymNewest key={gym.id} gymName={gym.gymName} />
        ))}
      </ul>
    </div>
  );
}

export default GymNewestList;
