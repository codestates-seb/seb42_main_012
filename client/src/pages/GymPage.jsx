import GymList from '../components/GymList';
import GymNewestList from '../components/GymNewestList';
import GymTabList from '../components/GymTabList';
import Header from '../components/layouts/Header/Header';
import Main from '../components/layouts/Main/Main';
import Nav from '../components/layouts/Nav/Nav';

function GymPage() {
  return (
    <>
      <Header titleText="GYM" />
      <Main>
        <GymNewestList />
        <GymTabList />
        <GymList />
      </Main>
      <Nav />
    </>
  );
}

export default GymPage;
