package main012.server.community.mapper;

import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import main012.server.community.dto.CommunityDto.AllCommunityResponse;
import main012.server.community.dto.CommunityDto.Patch;
import main012.server.community.dto.CommunityDto.Response;
import main012.server.community.dto.CommunityDto.TabListResponse;
import main012.server.community.dto.CommunityDto.WorkoutTabResponse;
import main012.server.community.entity.Community;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-03-28T10:19:24+0900",
    comments = "version: 1.4.2.Final, compiler: javac, environment: Java 11.0.18 (Azul Systems, Inc.)"
)
@Component
public class CommunityMapperImpl implements CommunityMapper {

    @Override
    public Community communityPatchDtoToCommunity(Patch patch) {
        if ( patch == null ) {
            return null;
        }

        Community community = new Community();

        community.setCommunityId( patch.getCommunityId() );
        community.setTitle( patch.getTitle() );
        community.setContent( patch.getContent() );

        return community;
    }

    @Override
    public List<Response> communitiesToCommunityResponseDtos(List<Community> communities) {
        if ( communities == null ) {
            return null;
        }

        List<Response> list = new ArrayList<Response>( communities.size() );
        for ( Community community : communities ) {
            list.add( communityToResponse( community ) );
        }

        return list;
    }

    @Override
    public List<AllCommunityResponse> communitiesToAllCommunityResponses(List<Community> community) {
        if ( community == null ) {
            return null;
        }

        List<AllCommunityResponse> list = new ArrayList<AllCommunityResponse>( community.size() );
        for ( Community community1 : community ) {
            list.add( communityToAllCommunityResponse( community1 ) );
        }

        return list;
    }

    @Override
    public List<TabListResponse> communitiesToTabListResponses(List<Community> community) {
        if ( community == null ) {
            return null;
        }

        List<TabListResponse> list = new ArrayList<TabListResponse>( community.size() );
        for ( Community community1 : community ) {
            list.add( communityToTabListResponse( community1 ) );
        }

        return list;
    }

    @Override
    public List<WorkoutTabResponse> communitiesToWorkoutTabResponses(List<Community> community) {
        if ( community == null ) {
            return null;
        }

        List<WorkoutTabResponse> list = new ArrayList<WorkoutTabResponse>( community.size() );
        for ( Community community1 : community ) {
            list.add( communityToWorkoutTabResponse( community1 ) );
        }

        return list;
    }
}
