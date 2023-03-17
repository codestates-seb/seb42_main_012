// import GymPriceTable from './GymPriceTable';

function GymPriceTableContainer() {
  const text = `[헬스장이용권]\n 1개월 : 60,000원\n 3개월 : 150,000원\n 6개월 : 250,000원\n\n[PT]\n 10회 : 540,000원\n 10회 : 960,000원\n 10회 : 1,050,000원`;

  return <p className="px-4 space-y-2 text-sm whitespace-pre-wrap">{text}</p>;
}

export default GymPriceTableContainer;
