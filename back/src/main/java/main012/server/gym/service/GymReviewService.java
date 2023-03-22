package main012.server.gym.service;


import lombok.AllArgsConstructor;
import main012.server.exception.BusinessLoginException;
import main012.server.exception.ExceptionCode;
import main012.server.gym.entity.GymReview;
import main012.server.gym.repository.GymReviewRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Optional;

@Service
@Transactional
@AllArgsConstructor // 생성자 주입
public class GymReviewService {
    private final GymReviewRepository gymReviewRepository;


    public GymReview createGymReview(GymReview gymReview) {

        return gymReviewRepository.save(gymReview); //DB에 저장
    }


    public GymReview updateGymReview(GymReview gymReview) {
        GymReview findGymReview = findVerifiedGymReview(gymReview.getId());

        Optional.ofNullable(gymReview.getGymGrade())
                .ifPresent(gymReviewGrade -> findGymReview.setGymGrade(gymReviewGrade));
        Optional.ofNullable(gymReview.getGymComment())
                .ifPresent(gymReviewComment -> findGymReview.setGymComment(gymReviewComment));//같은 게시글이 아닐경우 에러처리
        return gymReviewRepository.save(findGymReview);
    }

    // 헬스장 리뷰가 있는지 확인
    public GymReview findVerifiedGymReview(long gymReviewId) {
        Optional<GymReview> optionalGymReview =
                gymReviewRepository.findById(gymReviewId);
        GymReview findGymReview =
                optionalGymReview.orElseThrow(() ->
                        new BusinessLoginException(ExceptionCode.GYMREVIEW_NOT_FOUND));
        return findGymReview;
    }

//    // 리뷰 조회
//    public Page<GymReview> findGymReviews(int page, int size) {
//        return gymReviewRepository.findAll(PageRequest.of(page,size, Sort.by("id").descending()));
//    }
    /*헬스장 리뷰 조회*/
    public Page<GymReview> gymReviewPage(Pageable pageable){
        // .findAll - 해당 페이지 형식에 맞춰서 모든 리뷰 가져오기
        return gymReviewRepository.findAll(pageable);
    }

    // 헬스장 리뷰 삭제
    public void  gymReviewDelete(long gymReviewId) {
        GymReview findGymReview = findVerifiedGymReview(gymReviewId);
        gymReviewRepository.delete(findGymReview);
    }
}
