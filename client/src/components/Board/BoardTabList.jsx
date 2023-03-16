import BoardTabButton from './BoardTabButton';

function BoardTapList() {
  return (
    <ul className="flex pb-4 mt-4 overflow-scroll">
      <BoardTabButton text="전체" />
      <BoardTabButton text="자유게시판" />
      <BoardTabButton text="꿀팁" />
      <BoardTabButton text="오운완인증" />
      <BoardTabButton text="자세피드백" />
      <BoardTabButton text="파트너모집" />
    </ul>
  );
}

export default BoardTapList;
