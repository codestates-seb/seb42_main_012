import { useLocation } from 'react-router-dom';
import { IoMdChatbubbles } from 'react-icons/io';

function ChatButton() {
  const location = useLocation();
  const path = location.pathname;

  return (
    <>
      {(path === '/gyms' || path === '/board') && (
        <div className="fixed text-5xl right-4 bottom-32 text-[var(--main)]">
          <IoMdChatbubbles />
        </div>
      )}
    </>
  );
}

export default ChatButton;
