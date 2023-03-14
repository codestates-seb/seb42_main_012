import DisplayName from '../UI/DisplayName';

import ProfileImgContainer from '../UI/ProfileImgContainer';

function BoardHeaderContainer() {
  return (
    <div className="flex">
      <ProfileImgContainer />
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
