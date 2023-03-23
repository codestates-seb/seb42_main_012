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
    private final CommentRepository commentRepository;
    private final CommunityBookmarkRepository communityBookmarkRepository;
    private final GymBookmarkRepository gymBookmarkRepository;
    private final GymReviewRepository gymReviewRepository;
    private final RoleRepository roleRepository;

    private final PasswordEncoder passwordEncoder;
    private final MemberMapper memberMapper;

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
     */
    @Override
    public MemberResponseDto.Profile updateProfile(Long memberId, MemberRequestDto.ModifyProfile request, Image image) {
        Member findMember = findVerifyMember(memberId);
        if (request.getDisplayName() != null) {
            findMember.setDisplayName(request.getDisplayName());
        }
        if (image != null) {
            findMember.setImage(image);
        }

        log.info("## profileImageUrl : {}", findMember.getImage().getImagePath());

        MemberResponseDto.Profile response = memberMapper.memberToProfileDto(findMember);

        return response;
    }

    /**
     * 회원 탈퇴
     */
    @Override
    public void quitMember(Long memberId, MemberRequestDto.Quit request) {
        Member findMember = findVerifyMember(memberId);
        log.info("## deleteMember: {}", findMember.getEmail());

        // 탈퇴 동의 확인
        if (!request.getIsAgreed()) {
            throw new BusinessLoginException(ExceptionCode.DISAGREE_QUITTING);
        }
        // 비밀번호 확인
        if (!passwordEncoder.matches(request.getPassword(), findMember.getPassword())) {
            throw new BusinessLoginException(ExceptionCode.WRONG_PASSWORD);
        }

        // 탈퇴 상태로 변경
        findMember.setMemberStatus(MemberStatus.MEMBER_DELETED);

        // image 삭제
        findMember.setImage(null);

        // member_role 삭제
        findMember.getRoles().clear();

        // Community_Bookmark 의 Member null 로 set 해서 orphan = true 로 삭제
        findMember.getCommunityBookmarks().clear();

        // Gym_Bookmark 의 Member null 로 set 해서 orphan = true 로 삭제
        findMember.getGymBookmarks().clear();

        // Member가 Owner일 때, Gym 의 Member null 로 set 해서 orphan = true 로 삭제
        Set<Role> roles = findMember.getRoles();
        for (Role role : roles) {
            if (role.getName().equals("OWNER")) {
                findMember.getGyms().clear();
            }
        }
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
    public MemberResponseDto.MainPage findMainInfo(Long memberId) {
        Member findMember = findVerifyMember(memberId);

        String profileImageUrl;
        if (findMember.getImage() != null) {
            profileImageUrl = findMember.getImage().getImagePath();
        } else {
            profileImageUrl = null;
        }

        MemberResponseDto.MainPage response = memberMapper.memberToMainPageDto(findMember, profileImageUrl);

        return response;
    }

    /**
     * 마이페이지 내가 쓴 글 조회
     */
    @Override
    public MemberResponseDto.SearchMemberPage searchMemberCommunity(Long memberId, String lastFeedId) {
        Member member = findVerifyMember(memberId);
        Long feedId = getFeedId(lastFeedId);

        Page<Community> pages = communityRepository.findByMemberAndCommunityIdLessThanOrderByCommunityIdDesc(member, feedId, pageable);
        List<Community> contents = pages.getContent();

        int totalCnt = member.getBoardPostCnt();
        int totalElements = contents.size();

        Long nextCursor;
        if (totalElements < size) {
            nextCursor = -1L;
        } else {
            nextCursor = contents.get(size - 1).getCommunityId();
        }

        List<MemberInfoDto.Communities> responses = memberMapper.communityToCommunityInfos(contents);

        return new MemberResponseDto.SearchMemberPage
                (memberId,totalCnt, responses, totalElements, nextCursor);
    }

    /**
     * 마이페이지 내가 쓴 댓글 조회
     */
    @Override
    public MemberResponseDto.SearchMemberPage searchMemberComment(Long memberId, String lastFeedId) {
        Member member = findVerifyMember(memberId);
        Long feedId = getFeedId(lastFeedId);

        Page<CommunityComment> pages = commentRepository.findByMemberAndCommentIdLessThanOrderByCommentIdDesc(member, feedId, pageable);
        List<CommunityComment> contents = pages.getContent();

        int totalCnt = member.getBoardCommentCnt();
        int totalElements = contents.size();

        Long nextCursor;
        if (totalElements < size) {
            nextCursor = -1L;
        } else {
            nextCursor = contents.get(size -1).getCommentId();
        }

        List<MemberInfoDto.Comments> responses = memberMapper.commentsToCommentInfos(contents);

        return new MemberResponseDto.SearchMemberPage(
                memberId, totalCnt, responses, totalElements, nextCursor);
    }

    /**
     * 마이페이지 게사글 찜 조회
     */
    @Override
    public MemberResponseDto.SearchMemberPage searchMemberCommunityBookmark(Long memberId, String lastFeedId) {
        Member member = findVerifyMember(memberId);
        Long feedId = getFeedId(lastFeedId);

        Page<CommunityBookmark> pages = communityBookmarkRepository.findByMemberAndIdLessThanOrderByIdDesc(member, feedId, pageable);
        List<CommunityBookmark> contents = pages.getContent();

        int totalCnt = member.getBoardBookmarkCnt();
        int totalElements = contents.size();

        Long nextCursor;
        if (totalElements < size) {
             nextCursor = -1L;
        } else {
            nextCursor = contents.get(size -1).getId();
        }

        List<MemberInfoDto.CommunityBookmarks> responses = memberMapper.commentsToCommunityBookmarkInfos(contents);

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

        int totalCnt = member.getGymBookmarkCnt();
        int totalElements = contents.size();

        Long nextCursor;
        if (totalElements < size) {
            nextCursor = -1L;
        } else {
            nextCursor = contents.get(size -1).getId();
        }

        List<MemberInfoDto.GymBookmarks> responses = memberMapper.gymBookmarksToGymBookmarkInfos(contents);

        return new MemberResponseDto.SearchMemberPage(
                memberId, totalCnt, responses, totalElements, nextCursor);
    }

    /**
     * 마이페이지 내가 쓴 리뷰 조회
     */
    @Override
    public MemberResponseDto.SearchMemberPage searchMemberGymReview(Long memberId, String lastFeedId) {
        Member member = findVerifyMember(memberId);
        Long feedId = getFeedId(lastFeedId);

        Page<GymReview> pages = gymReviewRepository.findByMemberAndIdLessThanOrderByIdDesc(member, feedId, pageable);
        List<GymReview> contents = pages.getContent();

        int totalCnt = member.getGymReviewCnt();
        int totalElements = contents.size();

        Long nextCursor;
        if (totalElements < size) {
            nextCursor = -1L;
        } else {
            nextCursor = contents.get(size -1).getId();
        }

        List<MemberInfoDto.GymReviews> responses = memberMapper.gymReviewsToGymReviewInfos(contents);

        return new MemberResponseDto.SearchMemberPage(
                memberId, totalCnt, responses, totalElements, nextCursor);
    }


    private Long getFeedId (String lastFeedId) {
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

}
