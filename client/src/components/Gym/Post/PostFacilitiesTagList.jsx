import GymPostTag from '../../UI/Gym/GymPostTag';

function GymPostFacilitiesTagList({ register }) {
  const tagList = [
    { id: 1, text: '샤워실', registerName: 'shower' },
    { id: 2, text: '주차장', registerName: 'parking' },
    { id: 3, text: '운동복', registerName: 'sportsWear' },
    { id: 4, text: '락커', registerName: 'locker' },
  ];

  return (
    <ul className="flex items-center w-full mt-3">
      {tagList.map(tag => (
        <GymPostTag
          key={tag.id}
          text={tag.text}
          register={register}
          registerName={tag.registerName}
          id={tag.id}
        />
      ))}
    </ul>
  );
}

export default GymPostFacilitiesTagList;
