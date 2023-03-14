function TabButton({ text }) {
  return (
    <li className="border border-[#575757] rounded-full w-[60px] flex justify-center mr-2">
      <span className="text-[#575757]">{text}</span>
    </li>
  );
}

export default TabButton;
