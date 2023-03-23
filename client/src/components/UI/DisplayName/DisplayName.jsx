function DisplayName({ displayName }) {
  return (
    <>
      <span className="ml-4 mr-1 text-xl">
        {/* TODO: displayName 동적으로 변경 */}
        <span className="text-[var(--main)]">{displayName}</span>
      </span>
    </>
  );
}

export default DisplayName;
