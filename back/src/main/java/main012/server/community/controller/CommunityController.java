package main012.server.community.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import main012.server.auth.resolver.AuthMember;
import main012.server.community.dto.CommunityDto;
import main012.server.community.entity.Community;
import main012.server.community.entity.CommunityBookmark;
import main012.server.community.entity.Tab;
import main012.server.community.mapper.CommunityMapper;
import main012.server.community.repository.TabRepository;
import main012.server.community.service.CommunityBookmarkService;
import main012.server.community.service.CommunityService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.annotation.security.RolesAllowed;
import java.util.List;

@Slf4j
@Validated
@RequestMapping("/communities")
@RequiredArgsConstructor
@RestController
@CrossOrigin
public class CommunityController {

    private final CommunityService communityService;
    private final CommunityMapper mapper;
    private final TabRepository tabRepository;

    private final CommunityBookmarkService bookmarkService;


    // 커뮤니티 게시글 등록
    @PostMapping
    @RolesAllowed("ROLE_USER")
    public ResponseEntity postCommunity(@RequestBody CommunityDto.Post postRequest,
                                        @AuthMember Long memberId) {


        Community community = mapper.communityPostDtoToCommunity(postRequest, memberId);
        Tab tab = tabRepository.findById(postRequest.getTabId()).orElseThrow(() -> new RuntimeException("존재하지 않는 탭"));
        community.setTab(tab);
        communityService.createCommunity(community);

        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    // 커뮤니티 게시글 수정
    @PatchMapping("/{community_id}")
    @RolesAllowed("ROLE_USER")
    public ResponseEntity patchCommunity(@RequestBody CommunityDto.Patch patchRequest,
                                         @PathVariable("community_id") Long communityId,
                                         @AuthMember Long memberId) {

        patchRequest.setCommunityId(communityId);
        communityService.updateCommunity(mapper.communityPatchDtoToCommunity(patchRequest));

        return new ResponseEntity<>(HttpStatus.OK);
    }

    // 커뮤니티 게시글 삭제
    @DeleteMapping("/{community_id}")
    @RolesAllowed("ROLE_USER")
    public ResponseEntity deleteCommunity(@PathVariable("community_id") Long communityId,
                                          @AuthMember Long memberId) {

        communityService.deleteCommunity(communityId);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    // 게시글 상세 조회
    @GetMapping("/{community_id}")
    @RolesAllowed("ROLE_USER")
    public ResponseEntity getCommunity(@PathVariable("community_id") Long communityId,
                                       @AuthMember Long memberId) {

        Community community = communityService.findCommunity(communityId);
        CommunityDto.Response response = mapper.communityToToResponse(community);

        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    // 게시글 전체 조회 /communities ?lastFeedId=56
    @GetMapping
    @RolesAllowed("ROLE_USER")
    public ResponseEntity getAllCommunity(@AuthMember Long memberId) {

        List<Community> allCommunity = communityService.findAllCommunity();
        List<CommunityDto.Response> responses = mapper.communitiesToCommunityResponseDtos(allCommunity);

        return new ResponseEntity<>(responses, HttpStatus.OK);
    }

    // 커뮤니티 탭별 조회 /communities/{tab_id}?lastFeedId=55
    @GetMapping("/tab/{tab_id}")
    @RolesAllowed("ROLE_USER")
    public ResponseEntity tabCommunities(@PathVariable("tab_id") Long tabId,
                                         @AuthMember Long memberId) {

        List<Community> tabCommunities = communityService.findTabCommunities(tabId);
        List<CommunityDto.Response> response = mapper.communitiesToCommunityResponseDtos(tabCommunities);

        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }

    // 커뮤니티 게시글 검색(내용으로 검색)
    @GetMapping("/search")
    @RolesAllowed("ROLE_USER")
    public ResponseEntity serchByKeyword(@RequestParam("keyword") String keyword) {

        List<Community> response = communityService.findByKeyword(keyword);
        List<CommunityDto.Response> responses = mapper.communitiesToCommunityResponseDtos(response);

        return new ResponseEntity<>(responses, HttpStatus.OK);
    }

    // 게시글 북마크
    @PostMapping("/bookmarks/{gym_id}")
    @RolesAllowed("ROLE_USER")
    public ResponseEntity addBookmark(@AuthMember Long memberId,
                                      @PathVariable("gym_id") Long communityId) {

        bookmarkService.addBookmark(memberId, communityId);

        return new ResponseEntity<>(HttpStatus.OK);

    }


}
