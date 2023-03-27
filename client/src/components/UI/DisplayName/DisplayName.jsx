import useMyStore from '../../../state/useMyStore';

function DisplayName() {
  const { myElements } = useMyStore();
  return (
    <div className="my-4 text-xl">
      <span className="text-[var(--main)]">{myElements.displayName}</span>
      {myElements.displayName && <span className="ml-1 text-xl">회원님</span>}
    </div>
  );
}

export default DisplayName;
