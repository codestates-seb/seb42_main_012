function GymPriceTable() {
  return (
    <div className="flex flex-col mr-4">
      <div className="flex">
        <div className="border-[0.5px] w-[50px] flex justify-center">
          <span className="text-[14px] pt-[2px] font-bold">개월</span>
        </div>
        <div className="border-[0.5px] w-[100px] flex justify-center">
          <span className="text-[14px] pt-[2px] font-bold">헬스장 이용권</span>
        </div>
      </div>
      <ul className="flex w-[150px] flex-wrap">
        <li className="flex">
          <div className="border-[0.5px] w-[50px] flex justify-center">
            <span className="text-[14px] pt-[2px]">1</span>
          </div>
          <div className="border-[0.5px] w-[100px] flex justify-center">
            <span className="text-[14px] pt-[2px]">60,000원</span>
          </div>
        </li>
        <li className="flex">
          <div className="border-[0.5px] w-[50px] flex justify-center">
            <span className="text-[14px] pt-[2px]">3</span>
          </div>
          <div className="border-[0.5px] w-[100px] flex justify-center">
            <span className="text-[14px] pt-[2px]">150,000원</span>
          </div>
        </li>
        <li className="flex">
          <div className="border-[0.5px] w-[50px] flex justify-center">
            <span className="text-[14px] pt-[2px]">6</span>
          </div>
          <div className="border-[0.5px] w-[100px] flex justify-center">
            <span className="text-[14px] pt-[2px]">250,000원</span>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default GymPriceTable;
