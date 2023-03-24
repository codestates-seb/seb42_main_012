import { useNavigate } from 'react-router-dom';

function TabButton({ tabName, nav }) {
  const navigate = useNavigate();
  const buttonHandler = () => {
    navigate(nav);
  };
  return (
    <li>
      <div className="border border-[var(--second)] w-24 rounded-full flex justify-center mr-2 text-[var(--second)]">
        <button type="button" onClick={buttonHandler}>
          {tabName}
        </button>
      </div>
    </li>
  );
}

export default TabButton;
