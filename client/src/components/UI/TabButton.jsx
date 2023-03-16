import { useNavigate } from 'react-router-dom';

function TabButton({ text, nav }) {
  const navigate = useNavigate();
  const buttonHandler = () => {
    navigate(nav);
  };
  return (
    <li>
      <button
        type="button"
        className="border border-[#575757] w-[95px] rounded-full flex justify-center mr-2 text-[#575757]"
        onClick={buttonHandler}
      >
        {text}
      </button>
    </li>
  );
}

export default TabButton;
