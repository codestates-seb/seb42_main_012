package main012.server.community.mapper;

import main012.server.community.dto.CommunityDto;
import main012.server.community.entity.Community;
import main012.server.user.entity.Member;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface CommunityMapper {

    // postDto -> entity
    default Community communityPostDtoToCommunity (CommunityDto.Post post) {

        Community community = new Community();


        Member member = new Member();
        member.setId(post.getMemberId());

        community.setTitle(post.getTitle());
        community.setContent(post.getContent());

        community.setMember(member);

        return community;
    };

    // patchDto -> entity
    Community communityPatchDtoToCommunity(CommunityDto.Patch patch);

    // entity -> responseDto
    default CommunityDto.Response communityToToResponse (Community community){

        CommunityDto.Response responseCommunity = new CommunityDto.Response();


        responseCommunity.setCommunityId(community.getCommunityId());
        responseCommunity.setDisplayName(community.getMember().getDisplayName());
        responseCommunity.setTitle(community.getTitle());
        responseCommunity.setContent(community.getContent());
        responseCommunity.setTabName(community.getTab().getTabName());

        return responseCommunity;
    };

    List<CommunityDto.Response> communitiesToCommunityResponseDtos(List<Community> communities);
}
