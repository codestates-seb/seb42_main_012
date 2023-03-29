// import GymPostFacilitiesTagList from './PostFacilitiesTagList';
import GymPostFacilitiesTagList from './PostFacilitiesTagList';

function GymPostFacilities({ register, facilities }) {
  return (
    <div className="mb-8">
      <p className="mt-2 mb-1 text-sm text-[var(--main)]">편의시설</p>
      <GymPostFacilitiesTagList register={register} facilities={facilities} />
    </div>
  );
}

export default GymPostFacilities;
