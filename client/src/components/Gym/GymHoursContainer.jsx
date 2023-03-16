function GymHoursContainer({
  offdays,
  opentime,
  closetime,
  lateopen,
  earlyclose,
}) {
  const days = [
    '월요일',
    '화요일',
    '수요일',
    '목요일',
    '금요일',
    '토요일',
    '일요일',
  ];

  return (
    <ul className="px-4 space-y-2 text-sm list-disc">
      <li className="text-[#FCA43B] font-bold">
        {days[0]} : {offdays}
      </li>
      <li>
        {days[1]} : {opentime} ~ {closetime}
      </li>
      <li>
        {days[2]} : {opentime} ~ {closetime}
      </li>
      <li>
        {days[3]} : {opentime} ~ {closetime}
      </li>
      <li>
        {days[4]} : {opentime} ~ {closetime}
      </li>
      <li>
        {days[5]} : {opentime} ~ {closetime}
      </li>
      <li>
        {days[6]} : {lateopen} ~ {earlyclose}
      </li>
    </ul>
  );
}

export default GymHoursContainer;
