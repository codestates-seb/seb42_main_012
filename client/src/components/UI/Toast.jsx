import { useEffect } from 'react';

function Toast({ setToast, text }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      setToast(false);
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, [setToast]);

  return (
    <div className="w-full bg-[#000] text-4xl">
      <p>{text}</p>
    </div>
  );
}

export default Toast;
