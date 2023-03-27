import { useState } from 'react';

import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

//

function HeartButton() {
  const [heartChange, setHeartChange] = useState(false);

  const heartHandler = e => {
    e.preventDefault();
    setHeartChange(!heartChange);
  };

  return (
    <button type="button">
      {heartChange ? (
        <AiFillHeart onClick={heartHandler} />
      ) : (
        <AiOutlineHeart onClick={heartHandler} />
      )}
    </button>
  );
}

export default HeartButton;
