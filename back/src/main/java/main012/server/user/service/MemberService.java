package main012.server.user.service;

import lombok.RequiredArgsConstructor;
import main012.server.user.entity.Member;
import main012.server.user.repository.MemberRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@Transactional
@RequiredArgsConstructor
public class MemberService {

    private final MemberRepository memberRepository;
    private final PasswordEncoder passwordEncoder;

    /**
     * 일반 회원 가입
     */
    public void createMember(Member member) {
        verifyExistsEmail(member.getEmail());
        String encryptedPassword = passwordEncoder.encode(member.getPassword());
        member.setPassword(encryptedPassword);
        // role 부여하는 로직 필요

        memberRepository.save(member);
    }

    /**
     * 헬스장 사업주 가입
     */
    public void createOwner (Member owner) {
        verifyExistsEmail(owner.getEmail());
        String encryptedPassword = passwordEncoder.encode(owner.getPassword());
        owner.setPassword(encryptedPassword);
        // role 부여하는 로직 필요

        memberRepository.save(owner);
    }



    /**
     * 존재하는 이메일인지 확인
     */
    public void verifyExistsEmail(String email) {
        Optional<Member> optionalMember = memberRepository.findByEmail(email);
        if (optionalMember.isPresent()) {
            throw new RuntimeException("Already Exist Email"); //  businessLogicException 넣기
        }
    }

    /**
     * memberId로 검증된 회원 찾기
     */
    public Member findVerifyMember(Long memberId) {
        return memberRepository.findById(memberId)
                .orElseThrow(()-> new RuntimeException("존재하지 않는 회원입니다.")); // businessLogicException 넣기
    }
}
