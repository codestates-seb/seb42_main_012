package main012.server.community.service;

import lombok.RequiredArgsConstructor;
import main012.server.community.dto.CommunityDto;
import main012.server.community.entity.Community;
import main012.server.community.mapper.CommunityMapper;
import main012.server.community.repository.CommunityRepository;
import main012.server.community.repository.TabRepository;
import main012.server.exception.BusinessLoginException;
import main012.server.exception.ExceptionCode;
import main012.server.image.entity.CommunityImage;
import main012.server.image.entity.Image;
import main012.server.user.repository.MemberRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Transactional
public class CommunityService {

    private final CommunityRepository communityRepository;
    private final CommunityMapper communityMapper;

    private final int size = 15;

    // 커뮤니티 게시글 등록
    public Community createCommunity (Community community) {

        Community response = communityRepository.save(community);
        return response;
    }

    // 커뮤니티 게시글 수정
    public Community updateCommunity (Community community) {

        // 게시글이 존재하는지 확인
        Community existCommunity = findExistCommunity(community.getCommunityId());

        //제목수정
        Optional.ofNullable(community.getTitle())
                .ifPresent(title -> existCommunity.setTitle(title));

        //내용수정
        Optional.ofNullable(community.getContent())
                .ifPresent(content -> existCommunity.setContent(content));

//        탭수정
//        Optional.ofNullable(community.getTab().getTabId())
//                        .ifPresent(tabId -> tabRepository.findById(tabId));

        return existCommunity;

    }

    // 커뮤니티 게시글 삭제
    public void deleteCommunity (Long communityId) {

        //존재하는 게시글인지 확인
        Community existCommunity = findExistCommunity(communityId);

        communityRepository.delete(existCommunity);
    }

    // 게시글 상세 조회
    public Community findCommunity (Long communityId) {
        communityRepository.updateView(communityId);    //조회수 업데이트
        Community response = findExistCommunity(communityId);
        return response;
    }


    // 게시글 전체 조회
    public CommunityDto.listResponse findAllCommunity (String lastFeedId) {

        Long feedId = getFeedId(lastFeedId);

        Page<Community> list = communityRepository.findByCommunityIdLessThanOrderByCommunityIdDesc(feedId, PageRequest.of(0, size));
        List<Community> contents = list.getContent();

        int totalElements = contents.size();

        Long nextCursor;
        if (totalElements < size) {
            nextCursor = -1L;
        } else {
            nextCursor = contents.get(size - 1).getCommunityId();
        }

        List<CommunityDto.Response> responseList = communityMapper.communitiesToCommunityResponseDtos(contents);


        CommunityDto.listResponse response = new CommunityDto.listResponse();
        response.setContents(responseList);
        response.setTotalElements(totalElements);
        response.setNextCursor(nextCursor);

        return response;
    }


    // 게시글 검색 기능
    public CommunityDto.listResponse findByKeyword (String keyword, String lastFeedId) {

        Long feedId = getFeedId(lastFeedId);


        Page<Community> foundCommunities = communityRepository.findByContentContainingAndCommunityIdLessThanOrderByCommunityIdDesc(keyword, feedId, PageRequest.of(0, size) );
        List<Community> contents = foundCommunities.getContent();

        int totalElements = contents.size();

        Long nextCursor;
        if (totalElements < size) {
            nextCursor = -1L;
        } else {
            nextCursor = contents.get(size - 1).getCommunityId();
        }

        List<CommunityDto.Response> responseList = communityMapper.communitiesToCommunityResponseDtos(contents);


        CommunityDto.listResponse response = new CommunityDto.listResponse();
        response.setContents(responseList);
        response.setTotalElements(totalElements);
        response.setNextCursor(nextCursor);

        return response;
    }

    // 게시글 탭별 조회 기능
    public CommunityDto.listResponse findTabCommunities (Long tabId, String lastFeedId) {

        Long feedId = getFeedId(lastFeedId);


        Page<Community> communities =
                communityRepository.findAllByTabTabIdAndCommunityIdLessThanOrderByCommunityIdDesc(tabId, feedId, PageRequest.of(0, size));
        List<Community> contents = communities.getContent();

        int totalElements = contents.size();

        Long nextCursor;
        if (totalElements < size) {
            nextCursor = -1L;
        } else {
            nextCursor = contents.get(size - 1).getCommunityId();
        }

        List<CommunityDto.Response> responseList = communityMapper.communitiesToCommunityResponseDtos(contents);

        CommunityDto.listResponse response = new CommunityDto.listResponse();
        response.setContents(responseList);
        response.setTotalElements(totalElements);
        response.setNextCursor(nextCursor);

        return response;
    }

    // 페이지네이션 feedId 검증
    private Long getFeedId(String lastFeedId) {
        Long feedId;
        if (lastFeedId.isEmpty()) {
            feedId = 9223372036854775807L;
        } else if (!lastFeedId.matches("[+-]?\\d+")) {
            throw new BusinessLoginException(ExceptionCode.REQUEST_NOT_SUPPORT);
        } else {
            feedId = Long.valueOf(lastFeedId);
        }
        return feedId;
    }

    //존재하는 게시글인지 확인하는 메서드
    public Community findExistCommunity(Long communityId) {
        Optional<Community> optionalCommunity = communityRepository.findById(communityId);
        Community response = optionalCommunity.orElseThrow(
                () -> new BusinessLoginException(ExceptionCode.COMMUNITY_NOT_FOUND)
        );
        return response;
    }




}
