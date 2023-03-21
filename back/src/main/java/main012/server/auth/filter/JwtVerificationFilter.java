package main012.server.auth.filter;

import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.security.SignatureException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import main012.server.auth.jwt.JwtTokenizer;
import main012.server.auth.utils.CustomAuthorityUtils;
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


    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        // 예외 발생하면 SecurityContext 에 Authentication 저장되지 않음 -> 이 상태로 다음 filter 수행하면 AuthenticationException 발생
        // -> AuthenticationEntryPoint 가 처리
        try {
            Map<String, Object> claims = verifyJws(request);
            setAuthenticationToContext(claims);
        } catch (SignatureException se) {
            request.setAttribute("exception", se);
        } catch (ExpiredJwtException ee) {
            request.setAttribute("exception", ee);
        } catch (Exception e) {
            request.setAttribute("exception", e);
        }

        filterChain.doFilter(request, response);
    }

    @Override
    protected boolean shouldNotFilter(HttpServletRequest request) throws ServletException {
        String authorization = request.getHeader("Authorization");
        return authorization == null || !authorization.startsWith("Bearer");
    }

    private Map<String, Object> verifyJws(HttpServletRequest request) {
        String jws = request.getHeader("Authorization").replace("Bearer ", "");
        Map<String, Object> claims = jwtTokenizer.getClaims(jws);

        return claims;
    }

    private void setAuthenticationToContext(Map<String, Object> claims) {
        String memberId = String.valueOf(claims.get("memberId"));
        List<GrantedAuthority> authorities = authorityUtils.createAuthorities((String) claims.get("roles"));

        log.info("## authorities: {}", authorities);  // @@@@ 확인용이니까 나중엔 지워
        Authentication authentication = new UsernamePasswordAuthenticationToken(memberId, null, authorities);
        SecurityContextHolder.getContext().setAuthentication(authentication);
    }


}
