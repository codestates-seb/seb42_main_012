package main012.server.user.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import main012.server.exception.BusinessLoginException;
import main012.server.exception.ExceptionCode;
import main012.server.image.entity.Image;
import main012.server.user.dto.MemberRequestDto;
import main012.server.user.dto.MemberResponseDto;
import main012.server.user.entity.Member;
import main012.server.user.entity.Role;
import main012.server.user.enums.MemberStatus;
import main012.server.user.mapper.MemberMapper;
import main012.server.user.repository.MemberRepository;
import main012.server.user.repository.RoleRepository;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;
import java.util.Set;

@Service
@Transactional
@RequiredArgsConstructor
@Slf4j
public class MemberServiceImpl implements MemberService {

    private final MemberRepository memberRepository;
    private final RoleRepository roleRepository;
    private final PasswordEncoder passwordEncoder;
    private final MemberMapper memberMapper;

    @Value("${mail.address.admin}")
    private String adminMailAddress;

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
    public void quitMember(Long memberId, MemberRequestDto.Quit request ) {
        Member findMember = findVerifyMember(memberId);
        log.info("## deleteMember: {}", findMember.getEmail());

        // 탈퇴 동의 확인
        if (!request.getIsAgreed()){
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

}
