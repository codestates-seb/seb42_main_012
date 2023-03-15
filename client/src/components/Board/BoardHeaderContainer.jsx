import DisplayName from '../UI/DisplayName';
import ProfileImg from '../UI/ProfileImg';

function BoardHeaderContainer() {
  return (
    <div className="flex">
      <ProfileImg />
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
