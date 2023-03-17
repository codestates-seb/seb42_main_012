import GymTag from '../../UI/Gym/GymTag';

function GymTagList({ facilities }) {
  return (
    <ul className="flex mt-2 overflow-x-scroll h-[40px] scrollbar-hide">
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
