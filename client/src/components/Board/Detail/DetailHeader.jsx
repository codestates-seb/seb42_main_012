// import HeartContainer from '../../UI/HeartContainer';
import BoardHeaderContainer from '../Container/Header';

function DetailHeader({
  boardDetail,
  edit,
  setEdit,
  setDeleteImage,
  setEditOn,
  editOn,
  myMemberId,
  boardMemberId,
}) {
  return (
    <div className="flex items-center justify-between">
      <BoardHeaderContainer
        boardDetail={boardDetail}
        setEdit={setEdit}
        edit={edit}
        setDeleteImage={setDeleteImage}
        editOn={editOn}
        setEditOn={setEditOn}
        myMemberId={myMemberId}
        boardMemberId={boardMemberId}
      />
    </div>
  );
}

export default DetailHeader;
