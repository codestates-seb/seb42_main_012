import GymTag from '../../UI/Gym/GymTag';

function GymTagList({ facilityNames }) {
  return (
    <ul className="relative flex h-10 mt-2 overflow-x-scroll scrollbar-hide top-6">
      {facilityNames === null
        ? null
        : facilityNames.map(facility => (
            <GymTag
              key={facility.facilityId}
              facilityName={facility.facilityName}
            />
          ))}
    </ul>
  );
}

export default GymTagList;
