import { useState } from 'react';

function GymPostTag({ text, register, registerName, id, facility }) {
  const [buttonOn, setButtonOn] = useState(facility.length !== 0);

  const buttonHandler = () => {
    setButtonOn(!buttonOn);
  };

  return (
    <>
      <input
        type="checkbox"
        id={id}
        {...register(registerName)}
        value={text}
        className="hidden"
        onClick={buttonHandler}
      />
      <label htmlFor={id}>
        <div
          className={
            buttonOn
              ? 'flex items-center justify-center px-3 py-4 mr-2 rounded-md h-7 bg-[var(--main)] text-sm'
              : 'flex items-center justify-center px-3 py-4 mr-2 rounded-md h-7 bg-[var(--second-bg)] text-sm text-[var(--second)]'
          }
        >
          {text}
        </div>
      </label>
    </>
  );
}

export default GymPostTag;
