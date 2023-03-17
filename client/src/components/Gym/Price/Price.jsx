import { TbCurrencyWon } from 'react-icons/tb';
import GymDetailTitle from '../Detail/DetailTitle';
import GymPriceTableContainer from './PriceTableContainer';

function GymPrice() {
  return (
    <div>
      <GymDetailTitle titleText="상세가격">
        <div className="text-xl">
          <TbCurrencyWon />
        </div>
      </GymDetailTitle>
      <GymPriceTableContainer />
    </div>
  );
}

export default GymPrice;
