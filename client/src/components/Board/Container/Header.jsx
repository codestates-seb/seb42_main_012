// import DisplayName from '../../UI/DisplayName/DisplayName';
import ProfileImg from '../../UI/ProfileImg/ProfileImg';

function BoardHeaderContainer({ profileImage, displayName }) {
  return (
    <div className="flex">
      <div>
        <div className="flex items-center justify-center">
          <ProfileImg page="board" src={profileImage} alt="profileImage" />

          <div className="flex flex-col items-start justify-center">
            <span className="ml-4 font-medium">{displayName}</span>
            <p className="ml-4 text-sm">16분전</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BoardHeaderContainer;
