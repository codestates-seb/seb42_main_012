import { TbCurrencyWon } from 'react-icons/tb';
import GymDetailTitle from './GymDetailTitle';
import GymPriceTableContainer from './GymPriceTableContainer';

function GymPrice() {
  return (
    <div>
      <GymDetailTitle titleText="상세가격">
        <div className="text-[20px]">
          <TbCurrencyWon />
        </div>
      </GymDetailTitle>
      <GymPriceTableContainer />
    </div>
  );
}

export default GymPrice;
