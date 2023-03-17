import GymList from '../../components/Gym/List/GymList';
import GymNewestList from '../../components/Gym/Newest/GymNewestList';
import GymTabList from '../../components/Gym/List/GymTabList';
import Header from '../../components/layouts/Header/Header';
import Main from '../../components/layouts/Main/Main';
import Nav from '../../components/layouts/Nav/Nav';

function GymPage() {
  return (
    <>
      <Header titleText="GYM" nav="gympost" />
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
