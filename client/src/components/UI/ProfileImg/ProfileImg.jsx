function ProfileImg(props) {
  const { page, src, alt } = props;

  let classes = 'bg-[var(--second)] rounded-full ';

  if (page === 'my') {
    classes += 'w-20 h-20';
  } else if (page === 'board') {
    classes += 'w-20 h-20';
  }

  return <img className={classes} src={src} alt={alt} />;
}

export default ProfileImg;
