import ChatButton from '../../UI/ChatButton';

function Main({ children }) {
  return (
    <>
      <main className="w-full px-4 my-24 bg-white">{children}</main>
      <ChatButton />
    </>
  );
}

export default Main;
