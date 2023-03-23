package main012.server.gym.mapper;


import main012.server.gym.dto.GymReviewDto;
import main012.server.gym.entity.GymReview;
import main012.server.user.entity.Member;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface GymReviewMapper {

    default GymReview gymReviewPostDtoToGymReview(GymReviewDto.Post gymReviewPostDto, Long memberId){
        GymReview gymReview = new GymReview();
        Member member = new Member();
        member.setId(memberId);

        gymReview.setGymGrade(gymReviewPostDto.getGymGrade());
        gymReview.setGymComment(gymReviewPostDto.getGymComment());

        gymReview.setMember(member);
        return gymReview;
    }
    GymReview gymReviewPatchDtoToGymReview(GymReviewDto.Patch gymReviewPatchDto);
    GymReviewDto.Response gymReviewResponseDtoToGymReview(GymReview gymReview);
    List<GymReviewDto.Response> gymReviewsToGymResponseDtos(List<GymReview> gymReviews);


}
