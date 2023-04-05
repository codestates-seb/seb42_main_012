import dateFormat from '../../../utils/dateFormat';
import BoardDelete from '../Detail/BoardDelete';
import BoardEdit from '../Detail/BoardEdit';

function BoardHeaderContainer({
  boardDetail,
  edit,
  setEdit,
  setDeleteImage,
  editOn,
  setEditOn,
  myMemberId,
  boardMemberId,
}) {
  return (
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
      {myMemberId === boardMemberId ? (
        <div className="absolute flex text-2xl right-5">
          <BoardEdit
            edit={edit}
            setEdit={setEdit}
            boardDetail={boardDetail}
            setDeleteImage={setDeleteImage}
            editOn={editOn}
            setEditOn={setEditOn}
          />
          {edit ? null : <BoardDelete />}
        </div>
      ) : null}
    </div>
  );
}

export default BoardHeaderContainer;
