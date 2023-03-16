import DisplayName from '../UI/DisplayName';
import ProfileImg from '../UI/ProfileImg';

function BoardHeaderContainer() {
  return (
    <div className="flex">
      <div>
        <div className="flex">
          <ProfileImg page="board" />
          <div className="mt-1">
            <DisplayName />
            <p className="ml-4 text-sm">16분전</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BoardHeaderContainer;
