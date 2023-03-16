import { MdOutlineRateReview } from 'react-icons/md';
import GymDetailTitle from './GymDetailTitle';
import ReviewScore from '../ReviewScore';
import GymReviewPost from './GymReviewPost';
import GymReviewList from './GymReviewList';
import BasicButton from '../UI/BasicButton';

function GymReviews() {
  return (
    <div>
      <div className="flex items-center justify-between mt-4 w-90">
        <div>
          <GymDetailTitle titleText="리뷰">
            <div className="text-[22px]">
              <MdOutlineRateReview />
            </div>
          </GymDetailTitle>
        </div>
        <div>
          <ReviewScore />
        </div>
      </div>
      <GymReviewPost />
      <GymReviewList />
      <div className="flex justify-center mt-3">
        <BasicButton text="리뷰 전체보기" page="gymReview" nav="reviews" />
      </div>
    </div>
  );
}

export default GymReviews;
