import { useState } from 'react';

function GymPostTag({ text }) {
  const [buttonOn, setButtonOn] = useState(false);

  const buttonHandler = () => {
    setButtonOn(!buttonOn);
  };

  return (
    <li>
      {buttonOn ? (
        <div className="flex items-center justify-center px-3 py-4 mr-2 rounded-md h-7 bg-[var(--main)]">
          <button onClick={buttonHandler} type="button" className="text-sm">
            {text}
          </button>
        </div>
      ) : (
        <div className="flex items-center justify-center px-3 py-4 mr-2 rounded-md h-7 bg-[var(--second-bg)]">
          <button
            onClick={buttonHandler}
            type="button"
            className="text-sm text-[var(--second)]"
          >
            {text}
          </button>
        </div>
      )}
    </li>
  );
}

export default GymPostTag;
