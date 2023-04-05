import { TbCurrencyWon } from 'react-icons/tb';
import GymDetailTitle from '../Detail/DetailTitle';
import GymPriceTableContainer from './PriceTableContainer';

function GymPrice({ detailPrices }) {
  return (
    <div>
      <GymDetailTitle titleText="상세가격">
        <div className="text-xl">
          <TbCurrencyWon />
        </div>
      </GymDetailTitle>
      <GymPriceTableContainer detailPrices={detailPrices} />
    </div>
  );
}

export default GymPrice;
