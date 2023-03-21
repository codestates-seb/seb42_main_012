const Today = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = (String(0) + (today.getMonth() + 1)).slice(-2);
  const day = (String(0) + today.getDate()).slice(-2);
  const dateString = `${year}-${month}-${day}`;

  return dateString;
};

export default Today;
