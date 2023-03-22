package main012.server.gym.mapper;


import main012.server.gym.dto.GymReviewPatchDto;
import main012.server.gym.dto.GymReviewPostDto;
import main012.server.gym.dto.GymReviewResponseDto;
import main012.server.gym.entity.GymReview;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface GymReviewMapper {

    GymReview gymReviewPostDtoToGymReview(GymReviewPostDto gymReviewPostDto);
    GymReview gymReviewPatchDtoToGymReview(GymReviewPatchDto gymReviewPatchDto);
    GymReviewResponseDto gymReviewResponseDtoToGymReview(GymReview gymReview);
    List<GymReviewResponseDto> gymReviewsToGymResponseDtos(List<GymReview> gymReviews);


}
