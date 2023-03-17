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
        className="border border-[var(--second)] w-24 rounded-full flex justify-center mr-2 text-[var(--second)]"
        onClick={buttonHandler}
      >
        {text}
      </button>
    </li>
  );
}

export default TabButton;
