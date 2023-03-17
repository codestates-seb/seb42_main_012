import TabButton from '../../UI/Button/TabButton';

function MyDetailList() {
  return (
    <ul>
      {/* TODO: li map 으로 출력 */}
      <li className="flex items-center justify-between px-4 py-8 border-y border-[var(--main-border)] active:bg-[var(--main-active)]">
        <div className="flex items-center justify-center">
          <TabButton text="자유게시판" />
          <h3 className="ml-2">저만 믿으십쇼 제가 다 알려드리겠습니다.</h3>
        </div>
        <span className="text-[var(--second)]">2023.03.16</span>
      </li>
    </ul>
  );
}

export default MyDetailList;
