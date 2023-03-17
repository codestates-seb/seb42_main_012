import MyDetailTitle from '../../components/My/Detail/MyDetailTitle';
import MyDetailList from '../../components/My/Detail/MyDetailList';

function MyDetailPage({ text }) {
  return (
    <>
      <MyDetailTitle text={text} />
      <MyDetailList />
    </>
  );
}

export default MyDetailPage;
