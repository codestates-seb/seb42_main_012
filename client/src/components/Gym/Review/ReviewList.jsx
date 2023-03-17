import { useLocation } from 'react-router-dom';
import GymReview from './Review';

function GymReviewList() {
  const location = useLocation();

  const reviews = [
    {
      userId: 1,
      displayName: 'sdfsfsdf',
      grade: 5,
      comment:
        '시설도 정말 좋았고 직원들도 정말 친절했어요 무엇보다 제가 원하는 기구들이 가득했습니다. 번창하십쇼',
      createdAt: '2023-03-15',
    },
    {
      userId: 2,
      displayName: 'sdfsfsdf',
      grade: 4,
      comment:
        '시설도 정말 좋았고 직원들도 정말 친절했어요 무엇보다 제가 원하는 기구들이 가득했습니다. 번창하십쇼',
      createdAt: '2023-03-15',
    },
    {
      userId: 3,
      displayName: 'sdfsfsdf',
      grade: 3,
      comment:
        '시설도 정말 좋았고 직원들도 정말 친절했어요 무엇보다 제가 원하는 기구들이 가득했습니다. 번창하십쇼',
      createdAt: '2023-03-15',
    },
    {
      userId: 4,
      displayName: 'sdfsfsdf',
      grade: 4,
      comment:
        '시설도 정말 좋았고 직원들도 정말 친절했어요 무엇보다 제가 원하는 기구들이 가득했습니다. 번창하십쇼',
      createdAt: '2023-03-15',
    },
    {
      userId: 5,
      displayName: 'sdfsfsdf',
      grade: 5,
      comment:
        '시설도 정말 좋았고 직원들도 정말 친절했어요 무엇보다 제가 원하는 기구들이 가득했습니다. 번창하십쇼',
      createdAt: '2023-03-15',
    },
    {
      userId: 6,
      displayName: 'sdfsfsdf',
      grade: 2,
      comment:
        '시설도 정말 좋았고 직원들도 정말 친절했어요 무엇보다 제가 원하는 기구들이 가득했습니다. 번창하십쇼',
      createdAt: '2023-03-15',
    },
  ];

  return (
    <div>
      {location.pathname.slice(-7) === 'reviews'
        ? reviews.map(review => (
            <GymReview key={review.userId} review={review} />
          ))
        : reviews.map((review, idx) =>
            idx <= 2 ? <GymReview key={review.userId} review={review} /> : null,
          )}
    </div>
  );
}

export default GymReviewList;
