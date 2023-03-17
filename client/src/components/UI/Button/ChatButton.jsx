import { useLocation } from 'react-router-dom';
import { IoMdChatbubbles } from 'react-icons/io';

function ChatButton() {
  const location = useLocation();
  const path = location.pathname;

  return (
    <>
      {(path === '/gyms' || path === '/board') && (
        <div className="fixed text-5xl right-4 bottom-[120px] text-[#FCA43B]">
          <IoMdChatbubbles />
        </div>
      )}
    </>
  );
}

export default ChatButton;
