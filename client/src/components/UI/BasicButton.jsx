import { useNavigate } from 'react-router-dom';

function BasicButton(props) {
  const { text, page, nav } = props;

  const navigate = useNavigate();
  const buttonHandler = () => {
    navigate(nav);
  };

  let classes = 'text-md py-2 text-center font-medium rounded-lg ';

  if (page === 'my') {
    classes += 'w-[70%] bg-[#FCA43B] text-[#fff] m-2';
  } else if (page === 'login') {
    classes += 'w-[80%] bg-[#000] text-[#fff]';
  } else if (page === 'signup') {
    classes += 'w-[80%] bg-[#fff] text-[#000] border border-[#151414]';
  } else if (page === 'board') {
    classes += 'w-[70%] w-[70%] bg-[#000] text-[#fff] m-2';
  } else if (page === 'my_password') {
    classes += 'w-full bg-[#FCA43B] text-[#fff] mt-6';
  } else if (page === 'gymReview') {
    classes += 'border w-48 mt-1 text-[14px] m-2';
  } else if (page === 'modal') {
    classes +=
      'px-5 py-1 mt-4 mx-2 border border-[#FCA43B] bg-[#fff] text-[#FCA43B] active:bg-[#FCA43B] active:text-[#fff] text-xs';
  }

  return (
    <button className={classes} type="button" onClick={buttonHandler}>
      {text}
    </button>
  );
}

export default BasicButton;
