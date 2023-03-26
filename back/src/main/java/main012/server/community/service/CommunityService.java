package main012.server.community.service;

import lombok.RequiredArgsConstructor;
import main012.server.community.dto.CommunityDto;
import main012.server.community.entity.Community;
import main012.server.community.entity.CommunityBookmark;
import main012.server.community.mapper.CommunityMapper;
import main012.server.community.repository.CommunityBookmarkRepository;
import main012.server.community.repository.CommunityRepository;
import main012.server.community.repository.TabRepository;
import main012.server.exception.BusinessLoginException;
import main012.server.exception.ExceptionCode;
import main012.server.image.entity.CommunityImage;
import main012.server.image.entity.Image;
import main012.server.image.repository.CommunityImageRepo;
import main012.server.image.service.ImageService;
import main012.server.user.entity.Member;
import main012.server.user.repository.MemberRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.repository.query.SpelQueryContext;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Transactional
public class CommunityService {

    private final CommunityRepository communityRepository;
    private final CommunityMapper communityMapper;
    private final TabRepository tabRepository;

    private final MemberRepository memberRepository;
    private final ImageService imageService;

    private final CommunityImageRepo communityImageRepo;

    private final CommunityBookmarkRepository communityBookmarkRepository;

    private final int size = 15;

    // 커뮤니티 게시글 등록
    public List<CommunityDto.ImageResponse> createCommunity (CommunityDto.Post post, List<MultipartFile> files, Long memberId) throws IOException {

        Community community = communityMapper.communityPostDtoToCommunity(post, memberId);
        community.setTab(tabRepository.findById(post.getTabId()).get());

        List<Image> uploadedImages = null;
        if(!files.isEmpty()){
            uploadedImages = imageService.upload(files, "upload");
            createCommunityImage(community, uploadedImages);
        }

        communityRepository.save(community);

        // 커뮤니티 등록시 돌려줄 이미지 정보 생성
        List<CommunityDto.ImageResponse> imageResponses = new ArrayList<>();

        for (CommunityImage value : community.getCommunityImages()){
            CommunityDto.ImageResponse imageResponse = new CommunityDto.ImageResponse();
            imageResponse.setContentImageId(value.getImage().getId());
            imageResponse.setContentImageUrl(value.getImage().getImagePath());
            imageResponses.add(imageResponse);
        }


        return imageResponses;
    }

    private void createCommunityImage(Community community, List<Image> images) {
        for(Image image :images) {
            CommunityImage communityImage = new CommunityImage(image, community);
            community.setCommunityImage(communityImage);
        }
    }

    // 커뮤니티 게시글 수정
    public Community updateCommunity (CommunityDto.Patch patchRequest) {

        // 게시글이 존재하는지 확인
        Community existCommunity = findExistCommunity(patchRequest.getCommunityId());

        //제목수정
        Optional.ofNullable(patchRequest.getTitle())
                .ifPresent(title -> existCommunity.setTitle(title));

        //내용수정
        Optional.ofNullable(patchRequest.getContent())
                .ifPresent(content -> existCommunity.setContent(content));

        // 탭수정
        Optional.ofNullable(patchRequest.getTabId())
                        .ifPresent(tabId -> existCommunity.setTab(tabRepository.findById(tabId).orElseThrow(()->new BusinessLoginException(ExceptionCode.TAB_NOT_FOUND))));

        /* 사진 수정 로직 구현해야함
        * 현재 저장된 사진을 db, s3에서 지우고 -> 다시 등록하는 방식?
        * */


        return existCommunity;

    }

    // 커뮤니티 게시글 삭제
    public void deleteCommunity (Long communityId) {

        //존재하는 게시글인지 확인
        Community existCommunity = findExistCommunity(communityId);

        // 사진 삭제
        // 커뮤니티 게시글 번호로 저장된 이미지 찾기
        List<CommunityImage> communityImageList = communityImageRepo.findByCommunityCommunityId(communityId);

        for(CommunityImage value : communityImageList){
            imageService.remove(value.getImage());
            communityImageRepo.delete(value);
        }

        // 게시글 삭제
        communityRepository.delete(existCommunity);
    }

    // 게시글 상세 조회
    public CommunityDto.Response findCommunity (Long communityId, Long memberId) {

        //조회수 업데이트
        communityRepository.updateView(communityId);

        // 존재하는 게시글인지 확인
        Community foundCommunity = findExistCommunity(communityId);

        // 커뮤니티 게시글 번호로 저장된 이미지 찾기
        List<CommunityImage> communityImageList = communityImageRepo.findByCommunityCommunityId(communityId);


        // 컨텐츠에 저장된 이미지 id, url 응답데이터 추출
        List<CommunityDto.ImageResponse> imageInfo = new ArrayList<>();
        for(CommunityImage image : communityImageList){
            CommunityDto.ImageResponse response = new CommunityDto.ImageResponse();
            response.setContentImageId(image.getImage().getId());
            response.setContentImageUrl(image.getImage().getImagePath());
            imageInfo.add(response);
        }

//        // 찾은 이미지들의 url 얻어서 저장
//        List<String> communityImagesUrl = new ArrayList<>();
//
//        for(CommunityImage value : communityImageList){
//            String imagePath = value.getImage().getImagePath();
//            communityImagesUrl.add(imagePath);
//        }

        // 멤버 프로필 이미지 얻기 위한 멤버 조회
        Member member = memberRepository.findById(memberId).orElseThrow(() -> new BusinessLoginException(ExceptionCode.MEMBER_NOT_FOUND));

        CommunityDto.Response response = communityMapper.communityToResponse(foundCommunity);
//        response.setProfileImageUrl(member.getImage().getImagePath());
        response.setContentImages(imageInfo);

        return response;
    }

    // 게시글 전체 조회
    public CommunityDto.ListResponse findAllCommunity (String lastFeedId) {

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

        // 북마크 되어 있는지 체크
        List<CommunityDto.AllCommunityResponse> responseList = communityMapper.communitiesToAllCommunityResponses(contents);
        for(CommunityDto.AllCommunityResponse value : responseList){
            Long communityId = value.getCommunityId();
            Long memberId = value.getMemberId();
            Optional<CommunityBookmark> isBookmarked = communityBookmarkRepository.findByMemberIdAndCommunityCommunityId(memberId, communityId);
            if(isBookmarked.isPresent()){
                value.setBookmarked(true);
            }
        }

        CommunityDto.ListResponse response = new CommunityDto.ListResponse();
        response.setContents(responseList);
        response.setTotalElements(totalElements);
        response.setNextCursor(nextCursor);

        return response;
    }


    // 게시글 검색 기능
    public CommunityDto.ListResponse findByKeyword (String keyword, String lastFeedId) {

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

        List<CommunityDto.AllCommunityResponse> responseList = communityMapper.communitiesToAllCommunityResponses(contents);
        for(CommunityDto.AllCommunityResponse value : responseList) {
            Long communityId = value.getCommunityId();
            Long memberId = value.getMemberId();
            Optional<CommunityBookmark> isBookmarked = communityBookmarkRepository.findByMemberIdAndCommunityCommunityId(memberId, communityId);
            if (isBookmarked.isPresent()) {
                value.setBookmarked(true);
            }
        }

        CommunityDto.ListResponse response = new CommunityDto.ListResponse();
        response.setContents(responseList);
        response.setTotalElements(totalElements);
        response.setNextCursor(nextCursor);

        return response;
    }

    // 게시글 탭별 조회 기능
    public CommunityDto.ListResponse findTabCommunities (Long tabId, String lastFeedId) {

        Long feedId = getFeedId(lastFeedId);

        int totalElements;

        List<Community> contents;

        String imagePath = null;

        if(tabId ==3){
            // 오운완 탭 조회
            Page<Community> workoutTabCommunities = communityRepository.findAllByTabTabIdAndCommunityIdLessThanOrderByCommunityIdDesc(3L, feedId, PageRequest.of(0, size));
            contents = workoutTabCommunities.getContent();

        } else {
            // 일반 탭별 조회
            Page<Community> communities =
                    communityRepository.findAllByTabTabIdAndCommunityIdLessThanOrderByCommunityIdDesc(tabId, feedId, PageRequest.of(0, size));
            contents = communities.getContent();
        }

        totalElements = contents.size();




        Long nextCursor;
        if (totalElements < size) {
            nextCursor = -1L;
        } else {
            nextCursor = contents.get(size - 1).getCommunityId();
        }


        if(tabId == 3){
            List<CommunityDto.WorkoutTabResponse> responseList = communityMapper.communitiesToWorkoutTabResponses(contents);
            // 오운완 탭 조회시 대표 사진 설정
            for(CommunityDto.WorkoutTabResponse value : responseList){
                CommunityImage communityImage = communityImageRepo.findByCommunityCommunityId(value.getCommunityId()).get(0);
                String firstImagePath = communityImage.getImage().getImagePath();
                value.setContentImageUrl(firstImagePath);
            }
            CommunityDto.ListResponse response = new CommunityDto.ListResponse();
            response.setContents(responseList);
            response.setTotalElements(totalElements);
            response.setNextCursor(nextCursor);

            return response;
        } else {
        List<CommunityDto.TabListResponse> responseList = communityMapper.communitiesToTabListResponses(contents);
            for(CommunityDto.TabListResponse value : responseList){
                Long communityId = value.getCommunityId();
                Long memberId = value.getMemberId();
                Optional<CommunityBookmark> isBookmarked = communityBookmarkRepository.findByMemberIdAndCommunityCommunityId(memberId, communityId);
                if(isBookmarked.isPresent()){
                    value.setBookmarked(true);
                }
            }

        CommunityDto.ListResponse response = new CommunityDto.ListResponse();
        response.setContents(responseList);
        response.setTotalElements(totalElements);
        response.setNextCursor(nextCursor);

        return response;
    }
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
