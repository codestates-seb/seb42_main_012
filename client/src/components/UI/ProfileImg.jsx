function ProfileImg(props) {
  const { page, src, alt } = props;

  let classes = 'bg-[#eee] rounded-full ';

  if (page === 'my') {
    classes += 'w-[80px] h-[80px]';
  } else if (page === 'board') {
    classes += 'w-[40px] h-[40px]';
  }

  return <img className={classes} src={src} alt={alt} />;
}

export default ProfileImg;
