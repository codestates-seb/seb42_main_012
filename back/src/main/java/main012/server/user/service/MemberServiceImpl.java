package main012.server.user.service;

import lombok.RequiredArgsConstructor;
import main012.server.exception.BusinessLoginException;
import main012.server.exception.ExceptionCode;
import main012.server.user.dto.MemberRequestDto;
import main012.server.user.entity.Member;
import main012.server.user.entity.Role;
import main012.server.user.repository.MemberRepository;
import main012.server.user.repository.RoleRepository;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@Transactional
@RequiredArgsConstructor
public class MemberServiceImpl implements MemberService {

    private final MemberRepository memberRepository;
    private final RoleRepository roleRepository;
    private final PasswordEncoder passwordEncoder;

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
