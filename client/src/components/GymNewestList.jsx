import GymNewest from './GymNewest';

// const gymList = [{

// },]

function GymNewestList() {
  return (
    <div className="box-border border-b">
      <h2 className="text-[14px] font-bol">신규 헬스장</h2>
      <ul className="flex overflow-scroll">
        <GymNewest />
        <GymNewest />
        <GymNewest />
        <GymNewest />
      </ul>
    </div>
  );
}

export default GymNewestList;
