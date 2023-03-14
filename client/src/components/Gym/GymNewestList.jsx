import GymNewest from './GymNewest';

function GymNewestList() {
  const gyms = [
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
    {
      id: 5,
      gymName: '구름짐',
    },
    {
      id: 6,
      gymName: '구름짐',
    },
    {
      id: 7,
      gymName: '구름짐',
    },
    {
      id: 8,
      gymName: '구름짐',
    },
    {
      id: 9,
      gymName: '구름짐',
    },
    {
      id: 10,
      gymName: '구름짐',
    },
  ];

  return (
    <div className="border-b border-[lightGrey]">
      <h2 className="text-[14px] font-bold">신규 헬스장</h2>
      <ul className="flex overflow-scroll">
        {gyms.map(gym => (
          <GymNewest key={gym.id} gymId={gym.id} gymName={gym.gymName} />
        ))}
      </ul>
    </div>
  );
}

export default GymNewestList;
