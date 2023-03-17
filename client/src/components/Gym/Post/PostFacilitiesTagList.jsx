import GymPostTag from '../../UI/GymPostTag';

function GymPostFacilitiesTagList() {
  return (
    <ul className="flex items-center w-full">
      <GymPostTag text="샤워실" />
      <GymPostTag text="락커룸" />
      <GymPostTag text="주차장" />
      <GymPostTag text="운동복 대여" />
    </ul>
  );
}

export default GymPostFacilitiesTagList;
