function MyDetailTitle({ text, countFilter }) {
  return (
    <div className="flex items-center justify-between px-4 mb-8 font-bold">
      <h2>{text}</h2>
      <span className="text-[var(--main)]">{`(${countFilter})`}</span>
    </div>
  );
}

export default MyDetailTitle;
