package main012.server.community.mapper;

import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import main012.server.community.dto.CommunityDto.Patch;
import main012.server.community.dto.CommunityDto.Response;
import main012.server.community.entity.Community;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-03-24T14:38:10+0900",
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
            list.add( communityToToResponse( community ) );
        }

        return list;
    }
}
