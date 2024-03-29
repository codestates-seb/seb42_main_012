package main012.server.auth.filter;

import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.security.SignatureException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import main012.server.auth.jwt.JwtTokenizer;
import main012.server.auth.utils.CustomAuthorityUtils;
import main012.server.exception.BusinessLoginException;
import main012.server.exception.ExceptionCode;
import main012.server.user.entity.Member;
import main012.server.user.enums.MemberStatus;
import main012.server.user.repository.MemberRepository;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;
import java.util.Map;

@RequiredArgsConstructor
@Slf4j
public class JwtVerificationFilter extends OncePerRequestFilter {
    private final JwtTokenizer jwtTokenizer;
    private final CustomAuthorityUtils authorityUtils;
    private final MemberRepository memberRepository;


    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        // 예외 발생하면 SecurityContext 에 Authentication 저장되지 않음 -> 이 상태로 다음 filter 수행하면 AuthenticationException 발생
        // -> AuthenticationEntryPoint 가 처리
        try {
            Map<String, Object> claims = verifyJws(request);
            setAuthenticationToContext(claims);
        } catch (SignatureException se) {
            log.warn("## JwtVerification SignatureException : {}", se.getLocalizedMessage());
            request.setAttribute("exception", ExceptionCode.BAD_TOKEN_REQUEST);
        } catch (ExpiredJwtException ee) {
            log.warn("## JwtVerification SignatureException : {}", ee.getLocalizedMessage());
            request.setAttribute("exception", ExceptionCode.JWT_TOKEN_EXPIRED);
        } catch (Exception e) {
            log.warn("## JwtVerification Exception : {}", e.getLocalizedMessage());
            request.setAttribute("exception", ExceptionCode.BAD_TOKEN_REQUEST);
        }

        filterChain.doFilter(request, response);
    }

    @Override
    protected boolean shouldNotFilter(HttpServletRequest request) throws ServletException {
        String authorization = request.getHeader("Authorization");

        return authorization == null || !authorization.startsWith("Bearer");
    }

    private Map<String, Object> verifyJws(HttpServletRequest request) {
        String jws = request.getHeader("Authorization")
                .replace("Bearer ", "");

        Map<String, Object> claims = jwtTokenizer.getClaims(jws);

        // 유효한 회원인지 검증
        Long memberId = Long.parseLong(String.valueOf(claims.get("memberId")));
        Member findMember = memberRepository.findById(memberId)
                .orElseThrow(() -> new BusinessLoginException(ExceptionCode.MEMBER_NOT_FOUND));

        // 탈퇴한 회원인지 검증
        if (findMember.getMemberStatus().equals(MemberStatus.MEMBER_DELETED)) {
            throw new BusinessLoginException(ExceptionCode.QUITED_MEMBER);
        }

        return claims;
    }

    private void setAuthenticationToContext(Map<String, Object> claims) {
        String memberId = String.valueOf(claims.get("memberId"));
        List<GrantedAuthority> authorities = authorityUtils.createAuthorities((String) claims.get("roles"));

        log.info("## authorities: {}", authorities);  // 권한 출력 ex. ROLE_USER 출력
        Authentication authentication = new UsernamePasswordAuthenticationToken(memberId, null, authorities);
        SecurityContextHolder.getContext().setAuthentication(authentication);
    }


}
