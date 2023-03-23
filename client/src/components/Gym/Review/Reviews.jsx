import { MdOutlineRateReview } from 'react-icons/md';
import GymDetailTitle from '../Detail/DetailTitle';
import ReviewScore from './ReviewScore';
import GymReviewPost from './ReviewPost';
import GymReviewList from './ReviewList';
import BasicButton from '../../UI/Button/BasicButton';

function GymReviews() {
  return (
    <div>
      <div className="flex items-center justify-between mt-4 w-90">
        <div>
          <GymDetailTitle titleText="리뷰">
            <div className="text-xl">
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
