package main012.server.gym.mapper;


import main012.server.gym.dto.GymDto;
import main012.server.gym.dto.GymReviewDto;
import main012.server.gym.entity.Gym;
import main012.server.gym.entity.GymReview;
import main012.server.user.entity.Member;
import org.mapstruct.Mapper;

import java.time.format.DateTimeFormatter;
import java.util.List;

@Mapper(componentModel = "spring")
public interface GymReviewMapper {

    default GymReview gymReviewPostDtoToGymReview(GymReviewDto.Post gymReviewPostDto, Long memberId, Long gymId) {
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
        gymReviewResponseDtoToGymReview.setGymReviewId(gymReview.getId());
        gymReviewResponseDtoToGymReview.setDisplayName(gymReview.getMember().getDisplayName());
        gymReviewResponseDtoToGymReview.setGymGrade(gymReview.getGymGrade());
        gymReviewResponseDtoToGymReview.setGymComment(gymReview.getGymComment());
        gymReviewResponseDtoToGymReview.setCreatedAt(gymReview.getCreatedAt());

        return gymReviewResponseDtoToGymReview;
    }

    List<GymReviewDto.Response> gymReviewsToGymResponseDtos(List<GymReview> gymReviews);


    default GymReviewDto.ReviewInfo gymReviewToGymReviewInfoDto(GymReview gymReview) {
        GymReviewDto.ReviewInfo response = new GymReviewDto.ReviewInfo(
                gymReview.getId(),
                gymReview.getMember().getId(),
                gymReview.getMember().getDisplayName(),
                gymReview.getGymGrade(),
                gymReview.getGymComment(),
                gymReview.getCreatedAt().format(DateTimeFormatter.ofPattern("yyyy-MM-dd"))
        );

        return response;
    }

    List<GymReviewDto.ReviewInfo> gymReviewsToGymReviewInfoDtos(List<GymReview> gymReviews);

}
