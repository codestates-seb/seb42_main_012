import TabButton from '../UI/TabButton';

function BoardTabList() {
  return (
    <>
      <ul className="flex mt-5 ">
        <TabButton text="자유게시판" />
        <TabButton text="꿀팁" />
        <TabButton text="오운완인증" />
        <TabButton text="파트너모집" />
        <TabButton text="자세피드백" />
      </ul>
    </>
  );
}

export default BoardTabList;
