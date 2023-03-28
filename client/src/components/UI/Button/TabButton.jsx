import { useState } from 'react';

function TabButton({ tabName }) {
  const [checked, setChecked] = useState(false);

  const buttonHandler = () => {
    setChecked(!checked);
  };
  return (
    <li>
      {checked ? (
        <div className="border border-[var(--second)] w-24 rounded-full flex justify-center mr-2 text-white bg-orange">
          <button
            type="button"
            onClick={buttonHandler}
            className="w-full h-full"
          >
            {tabName}
          </button>
        </div>
      ) : (
        <div className="border border-[var(--second)] w-24 rounded-full flex justify-center mr-2 text-[var(--second)]">
          <button
            type="button"
            onClick={buttonHandler}
            className="w-full h-full"
          >
            {tabName}
          </button>
        </div>
      )}
    </li>
  );
}

export default TabButton;
