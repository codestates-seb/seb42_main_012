// import GymPriceTable from './GymPriceTable';

function GymPriceTableContainer() {
  // const prices = [
  //   {
  //     priceName: 1,
  //     price: '60,000원',
  //   },
  //   {
  //     priceName: 3,
  //     price: '150,000원',
  //   },
  //   {
  //     priceName: 6,
  //     price: '250,000원',
  //   },
  // ];

  // const prices2 = [
  //   {
  //     priceName: 10,
  //     price: '540,000원',
  //   },
  //   {
  //     priceName: 20,
  //     price: '960,000원',
  //   },
  //   {
  //     priceName: 30,
  //     price: '1,050,000원',
  //   },
  // ];

  return (
    <p className="px-4 space-y-2 text-sm">
      [헬스장이용권]
      <br />
      1개월 : 60,000원
      <br />
      3개월 : 150,000원
      <br />
      6개월 : 250,000원
      <br />
      <br />
      [PT]
      <br />
      10회 : 540,000원
      <br />
      10회 : 960,000원
      <br />
      10회 : 1,050,000원
      <br />
    </p>
  );
}

export default GymPriceTableContainer;
