import useBoardStore from '../../../state/useBoardStore';
import dateFormat from '../../../utils/dateFormat';

function BoardHeaderContainer() {
  const { boardDetail } = useBoardStore();
  return (
    <div className="flex">
      <div>
        <div className="flex items-center justify-center">
          <img
            src={boardDetail.profileImage}
            alt="프로필사진"
            className="bg-[var(--second)] rounded-full w-10 h-10 object-cover"
          />

          <div className="flex flex-col items-start justify-center">
            <span className="ml-4 font-medium">{boardDetail.displayName}</span>
            <p className="ml-4 text-sm">{dateFormat(boardDetail.createdAt)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BoardHeaderContainer;
