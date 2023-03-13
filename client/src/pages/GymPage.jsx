import Header from '../components/layout/Header';
import Main from '../components/layout/Main';
import Nav from '../components/layout/Nav';
import GymNewestList from '../components/GymNewestList';
import GymTabList from '../components/GymTabList';

function GymPage() {
  return (
    <div>
      <Header />
      <Main>
        <GymNewestList />
        <GymTabList />
      </Main>
      {/* <Chat /> */}
      <Nav />
    </div>
  );
}

export default GymPage;
