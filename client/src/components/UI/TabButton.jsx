function TabButton({ text }) {
  return (
    <li>
      <div className="border border-[#575757] w-[95px] rounded-full flex justify-center mr-2">
        <span className="text-[#575757]">{text}</span>
      </div>
    </li>
  );
}

export default TabButton;
