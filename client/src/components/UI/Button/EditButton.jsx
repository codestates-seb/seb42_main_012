import { AiFillEdit } from 'react-icons/ai';

function EditButton() {
  const handlerClickEdit = () => {
    console.log('click edit');
  };
  return (
    <button type="button" className="pr-2 text-xl">
      <AiFillEdit onClick={handlerClickEdit} />
    </button>
  );
}

export default EditButton;
