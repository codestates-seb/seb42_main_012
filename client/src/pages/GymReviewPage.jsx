import GymReviewList from '../components/Gym/GymReviewList';
import Header from '../components/layouts/Header/Header';
import Main from '../components/layouts/Main/Main';
import Nav from '../components/layouts/Nav/Nav';
import ReviewScore from '../components/ReviewScore';

function GymReviewPage() {
  return (
    <>
      <Header titleText="리뷰" />
      <Main>
        <ReviewScore />
        <GymReviewList />
      </Main>
      <Nav />
    </>
  );
}

export default GymReviewPage;
