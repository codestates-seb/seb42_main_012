function ProfileImg({ page, profileImage }) {
  let classes = 'bg-[var(--second)] rounded-full ';

  if (page === 'my') {
    classes += 'w-20 h-20';
  } else if (page === 'board') {
    classes += 'w-10 h-10';
  }

  return (
    <>
      <img
        className={classes}
        src={`${
          profileImage === undefined || profileImage === null
            ? 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
            : profileImage
        }`}
        alt="profile"
      />
    </>
  );
}

export default ProfileImg;
