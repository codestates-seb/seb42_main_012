import TabButton from '../../UI/Button/TabButton';

function BoardTapList() {
  return (
    <ul className="flex mt-4 overflow-x-scroll scrollbar-hide">
      <TabButton tabName="전체" />
      <TabButton tabName="자유게시판" />
      <TabButton tabName="꿀팁" />
      <TabButton tabName="오운완인증" />
      <TabButton tabName="자세피드백" />
      <TabButton tabName="파트너모집" />
    </ul>
  );
}

export default BoardTapList;
