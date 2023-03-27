const dateFormat = date => {
  const KR_TIME_DIFF = 9 * 60 * 60 * 1000; // 한국 시간 9시간 차이
  const now = new Date(Date.now());
  const createdAt = new Date(new Date(date).getTime() + KR_TIME_DIFF);
  const hoursDiff = Math.abs(now.getHours() - createdAt.getHours());
  const daysDiff = new Date(now - createdAt).getDate();
  const yearsDiff = Math.abs(now.getFullYear() - createdAt.getFullYear());

  if (yearsDiff > 1) {
    return yearsDiff === 1 ? `${yearsDiff}년 전` : `${yearsDiff}년 전`;
  }

  if (daysDiff > 1) {
    return daysDiff === 1 ? `${daysDiff}일 전` : `${daysDiff}일 전`;
  }

  return hoursDiff === 1 ? `${hoursDiff}시간 전` : `${hoursDiff}시간 전`;
};

export default dateFormat;
