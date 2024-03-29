import { useState } from 'react';
import { FiMoreVertical } from 'react-icons/fi';
import More from '../More';

function MoreButton() {
  const [openMore, setOpenMore] = useState(false);
  const openMoreHandler = () => {
    setOpenMore(!openMore);
  };

  return (
    <>
      <button type="button" className="pr-2 text-xl">
        <FiMoreVertical onClick={openMoreHandler} />
      </button>
      {openMore && <More setOpenMore={setOpenMore} />}
    </>
  );
}

export default MoreButton;
