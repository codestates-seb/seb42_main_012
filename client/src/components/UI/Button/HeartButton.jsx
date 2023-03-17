import { useState } from 'react';

import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

//

function HeartButton() {
  const [heartChange, setHeartChange] = useState(false);

  const heartHandler = () => {
    setHeartChange(!heartChange);
  };

  return (
    <div>
      {heartChange ? (
        <AiFillHeart onClick={heartHandler} className="cursor-pointer" />
      ) : (
        <AiOutlineHeart onClick={heartHandler} className="cursor-pointer" />
      )}
    </div>
  );
}

export default HeartButton;
