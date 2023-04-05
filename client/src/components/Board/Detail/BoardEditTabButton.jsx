function TabButton({
  tabName,
  setFilterOn,
  idx,
  filterOn,
  classname,
  setTabId,
}) {
  const buttonHandler = () => {
    const tr = filterOn.map((i, index) => index === idx);
    setFilterOn(tr);
    setTabId(idx + 1);
  };
  return (
    <li>
      <div className={classname}>
        <button type="button" onClick={buttonHandler} className="w-full h-full">
          {tabName}
        </button>
      </div>
    </li>
  );
}

export default TabButton;
