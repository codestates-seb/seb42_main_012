import GymTag from '../../UI/Gym/GymTag';

function GymTagList({ facilities }) {
  return (
    <ul className="relative flex h-10 mt-2 overflow-x-scroll scrollbar-hide top-1">
      {facilities === null
        ? null
        : facilities.map(facility => (
            <GymTag
              key={facility.facilityId}
              facilityName={facility.facilityName}
            />
          ))}
    </ul>
  );
}

export default GymTagList;
