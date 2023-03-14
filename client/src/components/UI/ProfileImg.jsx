function ProfileImg() {
  return (
    <>
      {/* TODO: 이미지경로 동적으로 변경 */}
      <img
        className="w-[80px] h-[80px] bg-[#eee] rounded-full"
        src="https://images.unsplash.com/photo-1497752531616-c3afd9760a11?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80"
        alt="profile"
      />
    </>
  );
}

export default ProfileImg;
