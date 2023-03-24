package main012.server.gym.mapper;


import main012.server.gym.dto.GymReviewPatchDto;
import main012.server.gym.dto.GymReviewPostDto;
import main012.server.gym.dto.GymReviewResponseDto;
import main012.server.gym.entity.Gym;
import main012.server.gym.entity.GymReview;
import main012.server.user.entity.Member;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface GymReviewMapper {

    default GymReview gymReviewPostDtoToGymReview(GymReviewPostDto gymReviewPostDto,Long memberId, Long gymId){
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
    GymReview gymReviewPatchDtoToGymReview(GymReviewPatchDto gymReviewPatchDto);
    GymReviewResponseDto gymReviewResponseDtoToGymReview(GymReview gymReview);
    List<GymReviewResponseDto> gymReviewsToGymResponseDtos(List<GymReview> gymReviews);


}
