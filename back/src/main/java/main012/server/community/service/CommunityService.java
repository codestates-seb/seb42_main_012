package main012.server.community.service;

import lombok.RequiredArgsConstructor;
import main012.server.community.entity.Community;
import main012.server.community.repository.CommunityRepository;
import main012.server.community.repository.TabRepository;
import main012.server.exception.BusinessLoginException;
import main012.server.exception.ExceptionCode;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Transactional
public class CommunityService {

    private final CommunityRepository communityRepository;
    private final TabRepository tabRepository;

    // 커뮤니티 게시글 등록
    public Community createCommunity (Community community) {
        Community response = communityRepository.save(community);
        return response;
    }

    // 커뮤니티 게시글 수정
    public void updateCommunity (Community community) {

        // 게시글이 존재하는지 확인
        Community existCommunity = findExistCommunity(community.getCommunityId());

        //제목수정
        Optional.ofNullable(community.getTitle())
                .ifPresent(title -> existCommunity.setTitle(title));

        //내용수정
        Optional.ofNullable(community.getContent())
                .ifPresent(content -> existCommunity.setContent(content));

        //탭수정
//        Optional.ofNullable(community.getTab().getTabId())
//                        .ifPresent(tabId -> existCommunity.getTab().setTabId(tabId));

    }

    // 커뮤니티 게시글 삭제
    public void deleteCommunity (Long communityId) {

        //존재하는 게시글인지 확인
        Community existCommunity = findExistCommunity(communityId);

        communityRepository.delete(existCommunity);
    }

    // 게시글 상세 조회
    public Community findCommunity (Long communityId) {
        Community response = findExistCommunity(communityId);
        return response;
    }


    // 게시글 전체 조회 /communities ?lastFeedId=56
    public List<Community> findAllCommunity () {

        List<Community> response = communityRepository.findAll();

        return response;
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
