import GymTag from '../../UI/Gym/GymTag';

function GymTagList({ facilities }) {
  return (
    <ul className="flex h-10 mt-2 overflow-x-scroll scrollbar-hide">
      {facilities.map(facility => (
        <GymTag
          key={facility.facilityId}
          facilityName={facility.facilityName}
        />
      ))}
    </ul>
  );
}

export default GymTagList;
