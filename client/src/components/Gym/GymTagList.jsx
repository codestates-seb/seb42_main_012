import GymTag from '../UI/GymTag';

function GymTagList() {
  return (
    <ul className="flex mt-2 bg-orange w-[160px] overflow-x-scroll">
      <GymTag />
      <GymTag />
      <GymTag />
    </ul>
  );
}

export default GymTagList;
