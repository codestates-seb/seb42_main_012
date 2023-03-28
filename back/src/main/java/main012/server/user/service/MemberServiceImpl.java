package main012.server.user.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import main012.server.community.entity.Community;
import main012.server.community.entity.CommunityBookmark;
import main012.server.community.entity.CommunityComment;
import main012.server.community.repository.CommentRepository;
import main012.server.community.repository.CommunityBookmarkRepository;
import main012.server.community.repository.CommunityRepository;
import main012.server.exception.BusinessLoginException;
import main012.server.exception.ExceptionCode;
import main012.server.gym.entity.GymBookmark;
import main012.server.gym.entity.GymReview;
import main012.server.gym.repository.GymBookmarkRepository;
import main012.server.gym.repository.GymReviewRepository;
import main012.server.image.entity.Image;
import main012.server.image.service.ImageService;
import main012.server.user.dto.MemberInfoDto;
import main012.server.user.dto.MemberRequestDto;
import main012.server.user.dto.MemberResponseDto;
import main012.server.user.entity.Member;
import main012.server.user.entity.Role;
import main012.server.user.enums.MemberStatus;
import main012.server.user.mapper.MemberMapper;
import main012.server.user.repository.MemberRepository;
import main012.server.user.repository.RoleRepository;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
@Transactional
@RequiredArgsConstructor
@Slf4j
public class MemberServiceImpl implements MemberService {

    private final MemberRepository memberRepository;
    private final CommunityRepository communityRepository;
    private final CommunityBookmarkRepository communityBookmarkRepository;
    private final CommentRepository commentRepository;
    private final GymReviewRepository gymReviewRepository;
    private final GymBookmarkRepository gymBookmarkRepository;
    private final RoleRepository roleRepository;

    private final PasswordEncoder passwordEncoder;
    private final MemberMapper memberMapper;
    private final ImageService imageService;

    @Value("${mail.address.admin}")
    private String adminMailAddress;

    private final int size = 15;    // 한번에 조회할 데이터의개수
    private final PageRequest pageable = PageRequest.of(0, size); // 무한 스크롤은 page 0으로 고정.


    /**
     * 일반 회원 가입
     */
    @Override
    public void signUpMember(MemberRequestDto.SignUpMember request) {
        verifyExistsEmail(request.getEmail());
        String encryptedPassword = passwordEncoder.encode(request.getPassword());
        Member member = new Member(request.getDisplayName(), request.getEmail(), encryptedPassword);

        // user role 부여
        assignRole("USER", member);

        if (member.getEmail().equals(adminMailAddress)) { // 관리자계정이면 user, owner, admin 3개의 권한 부여
            assignRole("ADMIN", member);
            assignRole("OWNER", member);
        }

        memberRepository.save(member);
        log.info("## 일반 회원가입 memberId : {}", member.getId());
    }

    /**
     * 헬스장 계정 회원 가입
     */
    @Override
    public void signUpOwner(MemberRequestDto.SignUpOwner request) {
        verifyExistsEmail(request.getEmail());
        String encryptedPassword = passwordEncoder.encode(request.getPassword());

        Member member = new Member(request.getDisplayName(), request.getEmail(), encryptedPassword);
        member.setBusinessNumber(request.getBusinessNumber());

        // owner role 부여
        assignRole("OWNER", member);

        memberRepository.save(member);
        log.info("## 헬스장 회원가입 memberId : {}", member.getId());
    }

    /**
     * 권한 부여
     */
    private void assignRole(String roleName, Member member) {
        Role role = roleRepository.findByName(roleName);
        member.addRole(role);
    }

    /**
     * 비밀번호 수정
     */
    @Override
    public void updatePassword(Long memberId, MemberRequestDto.ModifyPassword request) {
        Member findMember = findVerifyMember(memberId);
        log.info("## origin request password: {}", request.getOriginPassword());

        String encryptedNewPassword = passwordEncoder.encode(request.getNewPassword());

        log.info("## original Password : {}", findMember.getPassword());
        log.info("## New Password: {}", encryptedNewPassword);

        if (passwordEncoder.matches(request.getOriginPassword(), findMember.getPassword())) {
            findMember.setPassword(encryptedNewPassword);
        } else {
            throw new BusinessLoginException(ExceptionCode.WRONG_PASSWORD);
        }
    }

    /**
     * 프로필 수정
     * 닉네임은 무조건 받아와서 setDisplayName
     */
    @Override
    public MemberResponseDto.ModifiedProfile updateProfile(Long memberId, MemberRequestDto.ModifyProfile request, MultipartFile file) throws IOException {
        Member findMember = findVerifyMember(memberId);

        findMember.setDisplayName(request.getDisplayName());
        log.info("## modified DisplayName : {}", findMember.getDisplayName());

        if (!file.isEmpty() || request.getIsDeletedProfileImage() != null && request.getIsDeletedProfileImage()) { // 새로운 프사 파일이 들어오거나, 프사 삭제 = true 라면
            Optional.ofNullable(findMember.getImage())  // 멤버에 기존 프로필 사진이 있을 때
                    .ifPresent(image -> {
                        imageService.remove(image); // 기존 프로필 사진 s3에서 삭제
                        findMember.setImage(null);  // 이미지 테이블에서 기존 프로필 row 삭제
                    });
            log.info("## 기존 프사 삭제");
        }

        if (!file.isEmpty()) {  // 새로운 프사 파일이 들어왔다면
            log.info("## 프사 content-type : {}", file.getContentType().toString());
            Image uploadedImage = imageService.upload(file, "upload");  // s3에 업로드
            findMember.setImage(uploadedImage); // 새로운 프로필 사진 멤버랑 매핑
            log.info("## 새로운 프사 세팅");
        }

        // 프로필 사진 있으면 url 가져오고, 없으면 null return
        String profileImageUrl = getProfileImageUrl(findMember);

        MemberResponseDto.ModifiedProfile response = memberMapper.memberToModifiedProfileDto(findMember.getDisplayName(), profileImageUrl);

        log.info("## 프로필 변경 완료");
        return response;
    }

    /**
     * 회원 탈퇴
     */
    @Override
    public void quitMember(Long memberId, MemberRequestDto.Quit request) {
        Member findMember = findVerifyMember(memberId);
        log.info("## deleteMember Email : {}", findMember.getEmail());

        // 탈퇴 동의 확인
        if (request.getIsAgreed() == null || !request.getIsAgreed()) {
            log.warn("## deleteMember: 탈퇴 동의 안함");
            throw new BusinessLoginException(ExceptionCode.DISAGREE_QUITTING);
        }
        // 비밀번호 확인
        if (!passwordEncoder.matches(request.getPassword(), findMember.getPassword())) {
            log.warn("## deleteMember: 비밀번호 다름");
            throw new BusinessLoginException(ExceptionCode.WRONG_PASSWORD);
        }

        // 프사 삭제
        Optional.ofNullable(findMember.getImage())  // 멤버에 기존 프로필 사진이 있을 때
                .ifPresent(image -> {
                    imageService.remove(image); // 기존 프로필 사진 s3에서 삭제
                });
        findMember.setImage(null);

        // Community_Bookmark 의 Member null 로 set 해서 orphan = true 로 삭제
        findMember.getCommunityBookmarks().clear();
        log.info("## deleteMember: 커뮤니티 북마크 삭제 완료");

        // Gym_Bookmark 의 Member null 로 set 해서 orphan = true 로 삭제
        findMember.getGymBookmarks().clear();
        log.info("## deleteMember: 짐 북마크 삭제 완료");

        // Member가 Owner일 때, Gym 의 Member null 로 set 해서 orphan = true 로 삭제
        Set<Role> roles = findMember.getRoles();

        for (Role role : roles) {
            log.info("role name : {}", role.getName());
            if (role.getName().equals("OWNER")) {
                findMember.getGyms().stream()
                        .forEach(gym -> gym.getGymImages()
                                .forEach(gymImage -> imageService.remove(gymImage.getImage()))); //s3에서 삭제
                findMember.getGyms().clear();
                log.info("## deleteMember: 짐 삭제 완료");
            }
        }

        // member_role 삭제
        findMember.getRoles().clear();

        // 탈퇴 상태로 변경
        findMember.setMemberStatus(MemberStatus.MEMBER_DELETED);

    }

    /**
     * 존재하는 이메일인지 확인
     */
    @Override
    public void verifyExistsEmail(String email) {
        Optional<Member> optionalMember = memberRepository.findByEmail(email);
        if (optionalMember.isPresent()) {
            throw new BusinessLoginException(ExceptionCode.EMAIL_ALREADY_EXISTS);
        }
    }

    /**
     * memberId로 검증된 회원 찾기
     */
    @Override
    public Member findVerifyMember(Long memberId) {
        return memberRepository.findById(memberId)
                .orElseThrow(() -> new BusinessLoginException(ExceptionCode.MEMBER_NOT_FOUND));
    }

    /**
     * 마이페이지 메인 조회
     */
    @Override
    public MemberResponseDto.Profile findMainInfo(Long memberId) {
        Member findMember = findVerifyMember(memberId);
        String profileImageUrl = getProfileImageUrl(findMember);

        MemberResponseDto.Profile response = memberMapper.memberToProfileDto(findMember, profileImageUrl);
        log.info("## 마이페이지 메인 조회");
        return response;
    }

    /**
     * 마이페이지 내가 쓴 글 조회
     */
    @Override
    public MemberResponseDto.SearchMemberPage searchMemberCommunity(Long memberId, String lastFeedId) {
        Long feedId = getFeedId(lastFeedId);

        Page<Community> pages = communityRepository.findByMemberIdAndCommunityIdLessThanOrderByCommunityIdDesc(memberId, feedId, pageable);
        List<Community> contents = pages.getContent();

        Long totalCnt = communityRepository.countByMemberId(memberId);
        int totalElements = contents.size();

        Long nextCursor;
        if (totalElements < size) {
            nextCursor = -1L;
        } else {
            nextCursor = contents.get(size - 1).getCommunityId();
        }

        List<MemberInfoDto.Communities> responses = memberMapper.communityToCommunityInfos(contents);

        log.info("## 마이페이지 내가 쓴 게시글 조회");

        return new MemberResponseDto.SearchMemberPage
                (memberId, totalCnt, responses, totalElements, nextCursor);
    }

    /**
     * 마이페이지 내가 쓴 댓글 조회
     */
    @Override
    public MemberResponseDto.SearchMemberPage searchMemberComment(Long memberId, String lastFeedId) {
        Long feedId = getFeedId(lastFeedId);

        Page<CommunityComment> pages = commentRepository.findByMemberIdAndCommentIdLessThanOrderByCommentIdDesc(memberId, feedId, pageable);
        List<CommunityComment> contents = pages.getContent();

        Long totalCnt = commentRepository.countByMemberId(memberId);
        int totalElements = contents.size();

        Long nextCursor;
        if (totalElements < size) {
            nextCursor = -1L;
        } else {
            nextCursor = contents.get(size - 1).getCommentId();
        }

        List<MemberInfoDto.Comments> responses = memberMapper.commentsToCommentInfos(contents);

        log.info("## 마이페이지 내가 쓴 댓글 조회");

        return new MemberResponseDto.SearchMemberPage(
                memberId, totalCnt, responses, totalElements, nextCursor);
    }

    /**
     * 마이페이지 게사글 찜 조회
     */
    @Override
    public MemberResponseDto.SearchMemberPage searchMemberCommunityBookmark(Long memberId, String lastFeedId) {
        Long feedId = getFeedId(lastFeedId);

        Page<CommunityBookmark> pages = communityBookmarkRepository.findByMemberIdAndIdLessThanOrderByIdDesc(memberId, feedId, pageable);
        List<CommunityBookmark> contents = pages.getContent();

        Long totalCnt = communityBookmarkRepository.countByMemberId(memberId);
        int totalElements = contents.size();


        Long nextCursor;
        if (totalElements < size) {
            nextCursor = -1L;
        } else {
            nextCursor = contents.get(size - 1).getId();
        }

        List<MemberInfoDto.Communities> responses = memberMapper.communityBookmarksToCommunityInfos(contents);

        log.info("## 마이페이지 게시글 찜 조회");

        return new MemberResponseDto.SearchMemberPage(
                memberId, totalCnt, responses, totalElements, nextCursor);
    }

    /**
     * 마이페이지 헬스장 찜 조회
     */
    @Override
    public MemberResponseDto.SearchMemberPage searchMemberGymBookmark(Long memberId, String lastFeedId) {
        Member member = findVerifyMember(memberId);
        Long feedId = getFeedId(lastFeedId);

        Page<GymBookmark> pages = gymBookmarkRepository.findByMemberAndIdLessThanOrderByIdDesc(member, feedId, pageable);
        List<GymBookmark> contents = pages.getContent();

        Long totalCnt = gymBookmarkRepository.countByMemberId(memberId);
        int totalElements = contents.size();

        Long nextCursor;
        if (totalElements < size) {
            nextCursor = -1L;
        } else {
            nextCursor = contents.get(size - 1).getId();
        }

        List<MemberInfoDto.GymBookmarks> responses = memberMapper.gymsToGymInfos(contents);

        log.info("## 마이페이지 헬스장 찜 조회");

        return new MemberResponseDto.SearchMemberPage(
                memberId, totalCnt, responses, totalElements, nextCursor);
    }

    /**
     * 마이페이지 내가 쓴 리뷰 조회
     */
    @Override
    public MemberResponseDto.SearchMemberPage searchMemberGymReview(Long memberId, String lastFeedId) {
        Long feedId = getFeedId(lastFeedId);

        Page<GymReview> pages = gymReviewRepository.findByMemberIdAndIdLessThanOrderByIdDesc(memberId, feedId, pageable);
        List<GymReview> contents = pages.getContent();

        Long totalCnt = gymReviewRepository.countByMemberId(memberId);
        int totalElements = contents.size();

        Long nextCursor;
        if (totalElements < size) {
            nextCursor = -1L;
        } else {
            nextCursor = contents.get(size - 1).getMember().getId();
        }

        List<MemberInfoDto.GymReviews> responses = memberMapper.gymReviewsToGymReviewInfos(contents);

        log.info("## 마이페이지 내가 쓴 헬스장 리뷰 조회");

        return new MemberResponseDto.SearchMemberPage(
                memberId, totalCnt, responses, totalElements, nextCursor);
    }


    private Long getFeedId(String lastFeedId) {
        Long feedId;
        if (lastFeedId.isEmpty()) {
            feedId = 9223372036854775807L; // lastFeedId 처음엔 빈 값으로 들어옴
        } else if (!lastFeedId.matches("[+-]?\\d+")) { // lastFeedId가 숫자 형식이 아닐 경우 (마이너스 가능)
            throw new BusinessLoginException(ExceptionCode.REQUEST_NOT_SUPPORT);
        } else {
            feedId = Long.valueOf(lastFeedId);
        }
        return feedId;
    }

    // member의 profileImageUrl 찾아오기
    private String getProfileImageUrl(Member member) {
        String imagePath = null;
        if (member.getImage() != null) {
            imagePath = member.getImage().getImagePath();
        }
        return imagePath;
    }

}
