// import ChatButton from '../../UI/Button/ChatButton';

function Main({ children }) {
  return (
    <>
      <div className="w-full h-screen px-4 overflow-y-scroll bg-white">
        {children}
      </div>
      {/* <ChatButton /> */}
    </>
  );
}

export default Main;
