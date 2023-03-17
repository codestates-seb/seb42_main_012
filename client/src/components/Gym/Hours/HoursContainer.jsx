function GymHoursContainer() {
  const text = `월요일 : 정기휴무\n화요일 : 07:00 ~ 23:30\n수요일 : 07:00 ~ 23:30\n목요일 : 07:00 ~ 23:30\n금요일 : 07:00 ~ 23:30\n토요일 : 07:00 ~ 23:30\n일요일 : 10:00 ~ 19:00`;

  return <p className="px-4 space-y-2 text-sm whitespace-pre-wrap">{text}</p>;
}

export default GymHoursContainer;
