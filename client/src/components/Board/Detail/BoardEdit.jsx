import { BsEraser } from 'react-icons/bs';

function BoardEdit({ edit, setEdit, setEditOn }) {
  return (
    <>
      {edit ? null : (
        <button
          type="button"
          onClick={() => {
            setEdit(true);
            setEditOn(true);
          }}
        >
          <BsEraser />
        </button>
      )}
    </>
  );
}

export default BoardEdit;
