// import { useLocation } from 'react-router-dom';
import ReviewScore from '../../Gym/Review/ReviewScore';
import TabButton from '../../UI/Button/TabButton';
import useStore from '../../../state/useStore';

function MyDetailListItem({ tabName, title, created, grades, gymImage }) {
  // const location = useLocation();
  const {
    myBoards,
    // myComments,
    // myReviews,
    // myGymsBookmarks,
    // myBoardsBookmarks,
  } = useStore();

  return (
    <li className="flex items-center justify-between px-4 py-8 border-y border-[var(--main-border)] active:bg-[var(--main-active)]">
      <div className="flex items-center justify-center">
        <TabButton tabName={myBoards} />

        <ReviewScore grades={grades} />

        <img className="w-40" src={gymImage} alt="헬스장이미지" />

        <TabButton text={tabName} />

        <h3 className="ml-2 line-clamp-1">{title}</h3>
      </div>
      <span className="text-[var(--second)]">{created}</span>
    </li>
  );
}

export default MyDetailListItem;
