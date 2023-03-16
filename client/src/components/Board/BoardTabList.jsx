import TabButton from '../UI/TabButton';

function BoardTapList() {
  return (
    <ul className="flex mt-4 overflow-x-scroll scrollbar-hide">
      <TabButton text="전체" />
      <TabButton text="자유게시판" />
      <TabButton text="꿀팁" />
      <TabButton text="오운완인증" />
      <TabButton text="자세피드백" />
      <TabButton text="파트너모집" />
    </ul>
  );
}

export default BoardTapList;
