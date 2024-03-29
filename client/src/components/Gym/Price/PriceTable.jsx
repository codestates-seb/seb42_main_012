function GymPriceTable({ price }) {
  return (
    <li className="flex">
      <div className="border-[0.5px] w-[50px] flex justify-center border-[var(--second-border)]">
        <span className="text-sm pt-[2px] ">{price.priceName}</span>
      </div>
      <div className="border-[0.5px] w-[110px] flex justify-center border-[var(--second-border)]">
        <span className="text-sm pt-[2px]">{price.price}</span>
      </div>
    </li>
  );
}

export default GymPriceTable;
