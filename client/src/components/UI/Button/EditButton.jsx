import { useState } from 'react';
import { AiFillEdit, AiFillCheckCircle } from 'react-icons/ai';
import useMyStore from '../../../state/useMyStore';
import DisplayName from '../DisplayName/DisplayName';

function EditButton() {
  const { myElements } = useMyStore();
  const [edit, setEdit] = useState(false);
  const [displayName, setDisplayName] = useState('');

  const editHandler = () => {
    setEdit(!edit);
  };
  const onChangeHandler = e => {
    setDisplayName(e.target.value);
  };
  return (
    <>
      {edit ? (
        <input
          type="text"
          className="border border-[var(--second-border)] outline-[var(--main)] mx-3 rounded-sm p-2"
          value={displayName}
          onChange={onChangeHandler}
        />
      ) : (
        <>
          <DisplayName displayName={myElements.displayName} />
        </>
      )}
      <span className="ml-1 text-xl">회원님</span>
      <button type="button" className="ml-2 text-xl" onClick={editHandler}>
        {edit ? <AiFillCheckCircle /> : <AiFillEdit />}
      </button>
    </>
  );
}

export default EditButton;
