import GymPostTag from '../../UI/Gym/GymPostTag';

function GymPostFacilitiesTagList({ register }) {
  return (
    <ul className="flex items-center w-full mt-3">
      <GymPostTag
        text="샤워실"
        register={register}
        registerName="shower"
        id="check1"
      />
      <GymPostTag
        text="락커룸"
        register={register}
        registerName="locker"
        id="check2"
      />
      <GymPostTag
        text="주차장"
        register={register}
        registerName="parking"
        id="check3"
      />
      <GymPostTag
        text="운동복 대여"
        register={register}
        registerName="sportsWear"
        id="check4"
      />
    </ul>
  );
}

export default GymPostFacilitiesTagList;
