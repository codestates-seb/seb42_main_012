import { useState } from 'react';

function GymPostTag({ text }) {
  const [buttonOn, setButtonOn] = useState(false);

  const buttonHandler = () => {
    setButtonOn(!buttonOn);
  };

  return (
    <li>
      {buttonOn ? (
        <div className="flex items-center justify-center px-3 py-4 mr-2 border-2 rounded-md h-7 bg-orange">
          <button onClick={buttonHandler} type="button" className="text-[14px]">
            {text}
          </button>
        </div>
      ) : (
        <div className="flex items-center justify-center px-3 py-4 mr-2 rounded-md h-7 bg-grey">
          <button
            onClick={buttonHandler}
            type="button"
            className="text-[14px] text-darkGrey"
          >
            {text}
          </button>
        </div>
      )}
    </li>
  );
}

export default GymPostTag;
