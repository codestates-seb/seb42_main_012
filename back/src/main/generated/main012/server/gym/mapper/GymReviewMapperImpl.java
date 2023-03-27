package main012.server.gym.mapper;

import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import main012.server.gym.dto.GymReviewDto.Patch;
import main012.server.gym.dto.GymReviewDto.Response;
import main012.server.gym.entity.GymReview;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-03-24T15:51:32+0900",
    comments = "version: 1.4.2.Final, compiler: javac, environment: Java 11.0.18 (Azul Systems, Inc.)"
)
@Component
public class GymReviewMapperImpl implements GymReviewMapper {

    @Override
    public GymReview gymReviewPatchDtoToGymReview(Patch gymReviewPatchDto) {
        if ( gymReviewPatchDto == null ) {
            return null;
        }

        GymReview gymReview = new GymReview();

        gymReview.setId( gymReviewPatchDto.getId() );
        gymReview.setGymGrade( gymReviewPatchDto.getGymGrade() );
        gymReview.setGymComment( gymReviewPatchDto.getGymComment() );

        return gymReview;
    }

    @Override
    public Response gymReviewResponseDtoToGymReview(GymReview gymReview) {
        if ( gymReview == null ) {
            return null;
        }

        Response response = new Response();

        response.setId( gymReview.getId() );
        response.setGymGrade( gymReview.getGymGrade() );
        response.setGymComment( gymReview.getGymComment() );

        return response;
    }

    @Override
    public List<Response> gymReviewsToGymResponseDtos(List<GymReview> gymReviews) {
        if ( gymReviews == null ) {
            return null;
        }

        List<Response> list = new ArrayList<Response>( gymReviews.size() );
        for ( GymReview gymReview : gymReviews ) {
            list.add( gymReviewResponseDtoToGymReview( gymReview ) );
        }

        return list;
    }
}