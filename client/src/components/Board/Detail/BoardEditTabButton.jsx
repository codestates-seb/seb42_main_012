function TabButton({
  tabName,
  setFilterOn,
  idx,
  filterOn,
  classname,
  setTabId,
  filter,
}) {
  const buttonHandler = () => {
    const tr = filterOn.map((i, index) => index === idx);
    setFilterOn(tr);
    setTabId(filter);
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
