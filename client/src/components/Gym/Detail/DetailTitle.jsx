function GymDetailTitle({ children, titleText }) {
  return (
    <div className="flex items-center my-3">
      <div className="text-[var(--main)]">{children}</div>
      <h3 className="ml-1 font-bold text-[var(--second)]">{titleText}</h3>
    </div>
  );
}

export default GymDetailTitle;
