package main012.server.gym.mapper;


import main012.server.gym.dto.GymReviewDto;
import main012.server.gym.entity.Gym;
import main012.server.gym.entity.GymReview;
import main012.server.user.entity.Member;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface GymReviewMapper {

    default GymReview gymReviewPostDtoToGymReview(GymReviewDto.Post gymReviewPostDto, Long memberId, Long gymId){
        GymReview gymReview = new GymReview();
        Member member = new Member();
        member.setId(memberId);

        Gym gym = new Gym();
        gym.setId(gymId);





        gymReview.setGymGrade(gymReviewPostDto.getGymGrade());
        gymReview.setGymComment(gymReviewPostDto.getGymComment());

        gymReview.setMember(member);
        gymReview.setGym(gym);
        return gymReview;
    }

    GymReview gymReviewPatchDtoToGymReview(GymReviewDto.Patch gymReviewPatchDto);
    default GymReviewDto.Response gymReviewResponseDtoToGymReview(GymReview gymReview) {
        GymReviewDto.Response gymReviewResponseDtoToGymReview = new GymReviewDto.Response();

        gymReviewResponseDtoToGymReview.setMemberId(gymReview.getMember().getId());
        gymReviewResponseDtoToGymReview.setReviewId(gymReview.getId());
        gymReviewResponseDtoToGymReview.setDisplayName(gymReview.getMember().getDisplayName());
        gymReviewResponseDtoToGymReview.setGymGrade(gymReview.getGymGrade());
        gymReviewResponseDtoToGymReview.setGymComment(gymReview.getGymComment());

        return gymReviewResponseDtoToGymReview;
    }
    List<GymReviewDto.Response> gymReviewsToGymResponseDtos(List<GymReview> gymReviews);


}
