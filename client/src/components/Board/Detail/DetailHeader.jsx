import HeartContainer from '../../UI/HeartContainer';
import BoardHeaderContainer from '../Container/Header';

function BoardDetailHeader({ profileImage, displayName }) {
  return (
    <div className="flex items-center justify-between">
      <BoardHeaderContainer
        profileImage={profileImage}
        displayName={displayName}
      />

      <div className="mt-2">
        <HeartContainer />
      </div>
    </div>
  );
}

export default BoardDetailHeader;
