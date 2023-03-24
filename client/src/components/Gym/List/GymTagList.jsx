import GymTag from '../../UI/Gym/GymTag';

function GymTagList({ facilities }) {
  return (
    <ul className="relative flex h-10 mt-2 overflow-x-scroll scrollbar-hide top-6">
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
