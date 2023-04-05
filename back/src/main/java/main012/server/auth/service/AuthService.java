package main012.server.auth.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import main012.server.auth.jwt.JwtTokenizer;
import main012.server.exception.BusinessLoginException;
import main012.server.exception.ExceptionCode;
import main012.server.user.entity.Member;
import main012.server.user.repository.MemberRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@Service
@Transactional
@RequiredArgsConstructor
@Slf4j
public class AuthService {
    private final JwtTokenizer jwtTokenizer;
    private final MemberRepository memberRepository;

    /**
     * refresh 토큰으로 AccessToken 재발급 받기
     */
    public String reIssueAccessToken(String refreshToken) {

        String email = jwtTokenizer.getEmailFromRefreshToken(refreshToken);

        Member findMember = memberRepository.findByEmail(email)
                .orElseThrow(() -> new BusinessLoginException(ExceptionCode.MEMBER_NOT_FOUND));

        log.info("## refreshToken member: {}", findMember.getId());

        String reIssuedAccessToken = generateAccessToken(findMember);

        return reIssuedAccessToken;
    }

    private String generateAccessToken(Member member) {
        Map<String, Object> claims = new HashMap<>();
        claims.put("memberId", member.getId());
        claims.put("roles", member.getRoles().toString());

        String subject = member.getEmail();

        String reIssuedAccessToken = jwtTokenizer.generateAccessToken(claims, subject);

        return reIssuedAccessToken;
    }

    /**
     * 로그아웃
     */
    public void logOutMember(Long memberId) {
        Member findMember = memberRepository.findById(memberId)
                .orElseThrow(() -> new BusinessLoginException(ExceptionCode.MEMBER_NOT_FOUND));

        log.info("## LogOut Member: {}", findMember.getEmail());
    }
}
