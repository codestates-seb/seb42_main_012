import { useNavigate } from 'react-router-dom';
import gymAxios from '../../../pages/Gym/gymAxios';

function BasicButton(props) {
  const { text, page, nav, type, path, id } = props;
  const navigate = useNavigate();
  const buttonHandler = async () => {
    if (path !== undefined && text === '삭제하기') {
      if (path.slice(0, 5) === '/gyms') {
        if (window.confirm('정말 삭제하시겠어요?🥺')) {
          await gymAxios.delete(`/gyms/${id}`);
        }
      }
    }
    navigate(nav);
  };

  let classes = 'text-md py-2 text-center font-medium rounded-lg ';

  if (page === 'my') {
    classes += 'w-[70%] bg-[var(--main)] text-[#fff] m-2 mt-2';
  } else if (page === 'login') {
    classes += 'w-full bg-[#000] text-[#fff] mt-2';
  } else if (page === 'signup') {
    classes += 'w-full bg-[#fff] text-[#000] border border-[#151414]';
  } else if (page === 'board') {
    classes += 'w-full bg-[#000] text-[#fff] my-3';
  } else if (page === 'my_password') {
    classes += 'w-full bg-[var(--main)] text-[#fff] mt-6';
  } else if (page === 'gymReview') {
    classes += 'border w-48 mt-1 text-sm m-2';
  } else if (page === 'modal') {
    classes +=
      'px-5 py-1 mt-4 mx-2 border border-[var(--main)] bg-[#fff] text-[var(--main)] active:bg-[var(--main)] active:text-[#fff] text-xs';
  } else if (page === 'more') {
    classes +=
      'px-5 py-1 bg-[#fff] text-[var(--main)] active:bg-[var(--main)] active:bg-opacity-10 text-xs';
  }

  return (
    <button
      className={classes}
      type={type === 'button' ? 'button' : 'submit'}
      onClick={buttonHandler}
    >
      {text}
    </button>
  );
}

export default BasicButton;
