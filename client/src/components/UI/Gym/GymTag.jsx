function GymTag({ facilityName }) {
  return (
    <li>
      <div className="flex items-center justify-center w-20 h-5 mr-1 rounded-md bg-[var(--second-bg)]">
        <span className="text-xs">{facilityName}</span>
      </div>
    </li>
  );
}

export default GymTag;
