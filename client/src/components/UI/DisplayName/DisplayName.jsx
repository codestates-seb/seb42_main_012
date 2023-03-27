import useStore from '../../../state/useStore';

function DisplayName({ displayName }) {
  const { myElements } = useStore();
  return (
    <div className="my-4 text-xl">
      <span className="text-[var(--main)]">{displayName}</span>
      {myElements.displayName && <span className="ml-1 text-xl">회원님</span>}
    </div>
  );
}

export default DisplayName;
