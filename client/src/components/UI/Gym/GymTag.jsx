function GymTag({ facilityName }) {
  return (
    <li>
      <div className="flex h-[22px] justify-center items-center rounded-md bg-grey mr-1 w-[50px]">
        <span className="text-[10px]">{facilityName}</span>
      </div>
    </li>
  );
}

export default GymTag;
