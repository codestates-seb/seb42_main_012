import { useEffect } from 'react';
import logo from '../../assets/images/logo.svg';
import useMyStore from '../../state/useMyStore';
import api from '../../utils/api';

function HomePage() {
  const { setMyElements } = useMyStore();

  useEffect(() => {
    api.get('/members/my').then(res => setMyElements(res.data));
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <img className="mb-8 w-60" src={logo} alt="헬스타트업 로고" />
      <p className="text-sm font-semibold leading-7 text-center whitespace-pre-wrap">
        {`‘HELL START UP’이란 건강을 의미하는 ‘Health’,
시작과 성장을 의미하는 ‘Start Up’을 합친 단어입니다.
헬스타트업은 운동을 시작하려는 사람들에게
정보를 제공하는 서비스입니다.`}
      </p>
    </div>
  );
}

export default HomePage;
