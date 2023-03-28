package main012.server.community.mapper;

import lombok.RequiredArgsConstructor;
import main012.server.community.dto.CommunityDto;
import main012.server.community.entity.Community;
import main012.server.community.repository.CommunityBookmarkRepository;
import main012.server.image.entity.CommunityImage;
import main012.server.user.entity.Member;
import org.mapstruct.Mapper;

import java.util.ArrayList;
import java.util.List;

@Mapper(componentModel = "spring")

public interface CommunityMapper {


    // postDto -> entity
    default Community communityPostDtoToCommunity (CommunityDto.Post post, Long memberId) {


        Community community = new Community();
        community.setTitle(post.getTitle());
        community.setContent(post.getContent());


        return community;
    };

    // patchDto -> entity
    Community communityPatchDtoToCommunity(CommunityDto.Patch patch);

    // 커뮤니티 상세 조회 응답
    default CommunityDto.Response communityToResponse (Community community){

        CommunityDto.Response responseCommunity = new CommunityDto.Response();


        responseCommunity.setCommunityId(community.getCommunityId());
        responseCommunity.setMemberId(community.getMember().getId());
        responseCommunity.setDisplayName(community.getMember().getDisplayName());
        responseCommunity.setTitle(community.getTitle());
        responseCommunity.setContent(community.getContent());
        responseCommunity.setTabName(community.getTab().getTabName());
        responseCommunity.setBookmarkCnt(community.getCommunityBookmarks().size());
        responseCommunity.setCreatedAt(community.getCreatedAt().toString());

        return responseCommunity;
    };

    List<CommunityDto.Response> communitiesToCommunityResponseDtos(List<Community> communities);

    // 커뮤니티 전체조회 응답
    default CommunityDto.AllCommunityResponse communityToAllCommunityResponse(Community community){

        CommunityDto.AllCommunityResponse allCommunityResponse = new CommunityDto.AllCommunityResponse();

        allCommunityResponse.setCommunityId(community.getCommunityId());
        allCommunityResponse.setMemberId(community.getMember().getId());
        allCommunityResponse.setTabId(community.getTab().getTabId());
        allCommunityResponse.setTitle(community.getTitle());
        allCommunityResponse.setCreatedAt(community.getCreatedAt().toString());
        allCommunityResponse.setViewCnt(community.getViewCnt());


        return allCommunityResponse;
    };

    List<CommunityDto.AllCommunityResponse> communitiesToAllCommunityResponses(List<Community> community);


    // 커뮤니티 탭별 조회 응답
    default CommunityDto.TabListResponse communityToTabListResponse(Community community){

        CommunityDto.TabListResponse tabListResponse = new CommunityDto.TabListResponse();

        tabListResponse.setCommunityId(community.getCommunityId());
        tabListResponse.setMemberId(community.getMember().getId());
        tabListResponse.setTabId(community.getTab().getTabId());
        tabListResponse.setTabName(community.getTab().getTabName());
        tabListResponse.setTitle(community.getTitle());
        tabListResponse.setCreatedAt(community.getCreatedAt().toString());
        tabListResponse.setViewCnt(community.getViewCnt());

        return tabListResponse;
    };

    List<CommunityDto.TabListResponse> communitiesToTabListResponses(List<Community> community);


    // 커뮤니티 오운완 탭 조회 응답
    default CommunityDto.WorkoutTabResponse communityToWorkoutTabResponse(Community community){


        CommunityDto.WorkoutTabResponse workoutTabResponse = new CommunityDto.WorkoutTabResponse();

        workoutTabResponse.setTabId(community.getTab().getTabId());
        workoutTabResponse.setCommunityId(community.getCommunityId());

        return workoutTabResponse;
    };

    List<CommunityDto.WorkoutTabResponse> communitiesToWorkoutTabResponses(List<Community> community);






}
