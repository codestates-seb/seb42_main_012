// import classNames from 'classnames';

function BasicButton(props) {
  const { text, page } = props;

  let classes = 'w-[70%] text-md py-2 font-medium rounded-lg m-2 ';

  if (page === 'my') {
    classes += 'bg-[#FCA43B] text-[#fff]';
  } else if (page === 'login') {
    classes += 'bg-[#000] text-[#fff]';
  }

  return (
    <button className={classes} type="button">
      {text}
    </button>
  );
}

export default BasicButton;
