package main012.server.gym.service;


import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import main012.server.cursor.CursorResult;
import main012.server.exception.BusinessLoginException;
import main012.server.exception.ExceptionCode;
import main012.server.gym.dto.GymReviewDto;
import main012.server.gym.entity.Gym;
import main012.server.gym.entity.GymReview;
import main012.server.gym.mapper.GymReviewMapper;
import main012.server.gym.repository.GymRepository;
import main012.server.gym.repository.GymReviewRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Collection;
import java.util.Collections;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
@RequiredArgsConstructor
public class GymReviewService {
    private final GymReviewRepository gymReviewRepository;
    private final GymRepository gymRepository;
    private final GymReviewMapper gymReviewMapper;

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

    /**
     * 헬스장별 리뷰 조회
     */
    public List<GymReviewDto.ReviewInfo> findGymReviews(Long gymId) {
        Gym gym = gymRepository.findById(gymId)
                .orElseThrow(() -> new BusinessLoginException(ExceptionCode.GYM_NOT_FOUND));

        List<GymReview> gymReviews = gym.getGymReviews();

        Collections.reverse(gymReviews);

        List<GymReviewDto.ReviewInfo> responses = gymReviewMapper.gymReviewsToGymReviewInfoDtos(gymReviews);

        return responses;
    }

    // 헬스장 리뷰 삭제
    public void gymReviewDelete(Long gymReviewId) {
        GymReview findGymReview = findVerifiedGymReview(gymReviewId);
        gymReviewRepository.delete(findGymReview);
    }



    public CursorResult<GymReview> get(Long cursorId, Pageable page) {
        final List<GymReview> gymReviews = getGymReviews(cursorId, page);
        final Long lastIdOfList = gymReviews.isEmpty() ?
                null : gymReviews.get(gymReviews.size() - 1).getId();

        return new CursorResult<>(gymReviews, hasNext(lastIdOfList));
    }

    private List<GymReview> getGymReviews(Long id, Pageable page) {
        return id == null ?
                this.gymReviewRepository.findAllByOrderByIdDesc(page) :
                this.gymReviewRepository.findByIdLessThanOrderByIdDesc(id, page);
    }

    private Boolean hasNext(Long id) {
        if (id == null) return false;
        return this.gymReviewRepository.existsByIdLessThan(id);

    }
}
