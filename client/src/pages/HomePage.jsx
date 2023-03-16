import Nav from '../components/layouts/Nav/Nav';
import logo from './logo.png';

function HomePage() {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full h-screen px-4">
        <img
          className="w-[20rem] mt-[-124px]"
          src={logo}
          alt="헬스타트업 로고"
        />
        {/* <ul className="flex items-center justify-center">
          <li>김용희</li>
          <li>이서연</li>
          <li>이승미</li>
          <li>김종규</li>
          <li>양정은</li>
          <li>최유진</li>
        </ul> */}
        {/* <p>
          ‘HELL START UP’이란 건강을 의미하는 ‘Health’ , 시작과 성장을 의미하는
          ‘Start Up’이 결합하여 탄생하였습니다. 헬스타트업은 운동을 시작하려는
          사람들에게 정보를 제공하는 서비스입니다.
        </p> */}
      </div>
      <Nav />
    </>
  );
}

export default HomePage;
