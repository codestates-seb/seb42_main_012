package main012.server.community.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import main012.server.community.dto.CommunityDto;
import main012.server.community.entity.Community;
import main012.server.community.entity.Tab;
import main012.server.community.mapper.CommunityMapper;
import main012.server.community.repository.TabRepository;
import main012.server.community.service.CommunityService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@Validated
@RequestMapping("/communities")
@RequiredArgsConstructor
@RestController
public class CommunityController {

    private final CommunityService communityService;
    private final CommunityMapper mapper;
    private final TabRepository tabRepository;


    // 커뮤니티 게시글 등록
    @PostMapping
    public ResponseEntity postCommunity(@RequestBody CommunityDto.Post postRequest) {


        Community community = mapper.communityPostDtoToCommunity(postRequest);
        Tab tab = tabRepository.findById(postRequest.getTabId()).get();
        community.setTab(tab);
        communityService.createCommunity(community);

        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    // 커뮤니티 게시글 수정
    @PatchMapping("/{community_id}")
    public ResponseEntity patchCommunity(@RequestBody CommunityDto.Patch patchRequest,
                                         @PathVariable("community_id") Long communityId) {

        patchRequest.setCommunityId(communityId);
        Community response = communityService.updateCommunity(mapper.communityPatchDtoToCommunity(patchRequest));
        mapper.communityToToResponse(response);

        return new ResponseEntity<>(HttpStatus.OK);
    }

    // 커뮤니티 게시글 삭제
    @DeleteMapping("/{community_id}")
    public ResponseEntity deleteCommunity(@PathVariable("community_id") Long communityId) {

        communityService.deleteCommunity(communityId);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    // 게시글 상세 조회
    @GetMapping("/{community_id}")
    public ResponseEntity getCommunity(@PathVariable("community_id") Long communityId) {

        Community community = communityService.findCommunity(communityId);
        CommunityDto.Response response = mapper.communityToToResponse(community);

        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    // 게시글 전체 조회 /communities ?lastFeedId=56
    @GetMapping
    public ResponseEntity getAllCommunity() {

        List<Community> allCommunity = communityService.findAllCommunity();
        List<CommunityDto.Response> responses = mapper.communitiesToCommunityResponseDtos(allCommunity);

        return new ResponseEntity<>(responses, HttpStatus.OK);
    }




}
