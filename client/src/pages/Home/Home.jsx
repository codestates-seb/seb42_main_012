import logo from '../../assets/images/logo.svg';

function HomePage() {
  // const teamMembers = [
  //   {
  //     id: 1,
  //     memberName: '김용희',
  //     avatar: 'aa',
  //   },
  //   {
  //     id: 2,
  //     memberName: '이서연',
  //     avatar: 'aa',
  //   },
  //   {
  //     id: 3,
  //     memberName: '이승미',
  //     avatar: 'aa',
  //   },
  //   {
  //     id: 4,
  //     memberName: '김종규',
  //     avatar: 'aa',
  //   },
  //   {
  //     id: 5,
  //     memberName: '양정은',
  //     avatar: 'aa',
  //   },
  //   {
  //     id: 6,
  //     memberName: '최유진',
  //     avatar: 'aa',
  //   },
  // ];
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <img className="w-60" src={logo} alt="헬스타트업 로고" />
      {/* <ul className="flex items-center justify-center">
        {teamMembers.map((member) => <li key={member.id} member={member}></li>)}
      </ul> */}
      {/* <p>
        ‘HELL START UP’이란 건강을 의미하는 ‘Health’ , 시작과 성장을 의미하는
        ‘Start Up’이 결합하여 탄생하였습니다. 헬스타트업은 운동을 시작하려는
        사람들에게 정보를 제공하는 서비스입니다.
      </p> */}
    </div>
  );
}

export default HomePage;
