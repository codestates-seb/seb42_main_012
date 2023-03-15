import { Link } from 'react-router-dom';

function BasicButton(props) {
  const { text, page, to, type } = props;

  let classes = 'text-md py-2 text-center font-medium rounded-lg ';

  if (page === 'my') {
    classes += 'w-[70%] bg-[#FCA43B] text-[#fff] m-2';
  } else if (page === 'login') {
    classes += 'bg-[#000] text-[#fff]';
  } else if (page === 'board') {
    classes += 'w-[70%] w-[70%] bg-[#000] text-[#fff] m-2';
  } else if (page === 'my_password') {
    classes += 'w-full bg-[#FCA43B] text-[#fff] mt-6';
  } else if (page === 'gymReview') {
    classes += 'border w-48 mt-1 text-[14px] m-2';
  }

  return (
    <Link to={to} className={classes} type={type}>
      {text}
    </Link>
  );
}

export default BasicButton;
