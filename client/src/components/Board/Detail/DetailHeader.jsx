import HeartContainer from '../../UI/HeartContainer';
import BoardHeaderContainer from '../Container/Header';
import dateFormat from '../../../utils/dateFormat';

function DetailHeader({ profileImage, displayName, createdAt, bookmarkCnt }) {
  return (
    <div className="flex items-center justify-between">
      <BoardHeaderContainer
        profileImage={profileImage}
        displayName={displayName}
        createdAt={dateFormat(createdAt)}
      />

      <div className="mt-2">
        <HeartContainer bookmarkCnt={bookmarkCnt} />
      </div>
    </div>
  );
}

export default DetailHeader;
