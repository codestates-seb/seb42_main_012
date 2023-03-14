function GymDetailTitle({ children, titleText }) {
  return (
    <div className="flex items-center my-3">
      <div className="text-orange">{children}</div>
      <h3 className="ml-1 font-bold text-[#505050]">{titleText}</h3>
    </div>
  );
}

export default GymDetailTitle;
