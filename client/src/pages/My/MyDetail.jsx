import Header from '../../components/layouts/Header/Header';
import Nav from '../../components/layouts/Nav/Nav';
import MyDetailTitle from '../../components/My/MyDetailTitle';
import MyDetailList from '../../components/My/Detail/MyDetailList';

function MyDetailPage({ text }) {
  return (
    <>
      <Header titleText="MY" />
      <MyDetailTitle text={text} />
      <MyDetailList />
      <Nav />
    </>
  );
}

export default MyDetailPage;
