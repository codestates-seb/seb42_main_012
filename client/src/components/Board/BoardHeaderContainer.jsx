import DisplayName from '../UI/DisplayName';

function BoardHeaderContainer() {
  return (
    <div className="flex">
      <div>
        <div>
          <DisplayName />
        </div>
        <span className="ml-4">34초전</span>
      </div>
    </div>
  );
}

export default BoardHeaderContainer;
