import GymPriceTable from './GymPriceTable';

function GymPriceTableContainer() {
  const prices = [
    {
      priceName: 1,
      price: '60,000원',
    },
    {
      priceName: 3,
      price: '150,000원',
    },
    {
      priceName: 6,
      price: '250,000원',
    },
  ];

  const prices2 = [
    {
      priceName: 10,
      price: '540,000원',
    },
    {
      priceName: 20,
      price: '960,000원',
    },
    {
      priceName: 30,
      price: '1,050,000원',
    },
  ];

  return (
    <div className="flex">
      <div className="flex flex-col mr-2">
        <div className="flex">
          <div className="border-[0.5px] w-[50px] flex justify-center border-grey">
            <span className="text-[14px] pt-[2px] font-bold">개월</span>
          </div>
          <div className="border-[0.5px] w-[110px] flex justify-center border-grey">
            <span className="text-[14px] pt-[2px] font-bold">
              헬스장 이용권
            </span>
          </div>
        </div>
        <ul className="flex w-[150px] flex-wrap">
          {prices.map((price, idx) => (
            <GymPriceTable key={idx} price={price} />
          ))}
        </ul>
      </div>
      <div className="flex flex-col mr-4">
        <div className="flex">
          <div className="border-[0.5px] w-[50px] flex justify-center border-grey">
            <span className="text-[14px] pt-[2px] font-bold">횟수</span>
          </div>
          <div className="border-[0.5px] w-[110px] flex justify-center border-grey">
            <span className="text-[14px] pt-[2px] font-bold">PT</span>
          </div>
        </div>
        <ul className="flex w-[150px] flex-wrap">
          {prices2.map((price, idx) => (
            <GymPriceTable key={idx} price={price} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default GymPriceTableContainer;
