package main012.server.auth.jwt;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jws;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import lombok.Getter;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.security.Key;
import java.util.Calendar;
import java.util.Date;
import java.util.Map;

/*
 * 토큰 생성 & 검증
 * 해당 컴포넌트는 필터 클래스에서 사전 검증을 거침.
 */
@Component
@Slf4j
public class JwtTokenizer {
    @Getter
    private final Key key;

    @Value("${jwt.access.expiration}")
    private int accessTokenExpiration;

    @Value("${jwt.refresh.expiration}")
    private int refreshTokenExpiration;

    // 초기값 설정
    public JwtTokenizer(@Value("${jwt.key}") String secretKey) {
        key = getKeyFromBase64EncodedKey(secretKey);
    }

    // AccessToken 생성
    public String generateAccessToken(Map<String, Object> claims,
                                      String subject) {
        Date now = new Date();
        Date accessExpiration = getTokenExpirationDate(accessTokenExpiration);

        return Jwts.builder()
                .setClaims(claims)
                .setSubject(subject)
                .setIssuedAt(now)
                .setExpiration(accessExpiration)
                .signWith(key)
                .compact();
    }

    // refreshToken 생성
    public String generateRefreshToken(String subject) {
        Date now = new Date();
        Date refreshExpiration = getTokenExpirationDate(refreshTokenExpiration);

        return Jwts.builder()
                .setSubject(subject)
                .setIssuedAt(now)
                .setExpiration(refreshExpiration)
                .signWith(key)
                .compact();
    }

    // Jwt 토큰 유효성 체크 하고 claims 얻음
    public Jws<Claims> verifySignature(String jws) {
        return Jwts.parserBuilder()
                .setSigningKey(key)
                .build()
                .parseClaimsJws(jws); // jws = Signature 가 포함된 JWT
    }

    // claims 얻기
    public Map<String, Object> getClaims(String jws) {
        Map<String, Object> claims = Jwts.parserBuilder()
                .setSigningKey(key)
                .build()
                .parseClaimsJws(jws)
                .getBody();

        return claims;
    }

    // refreshToken에서 sub(email) 찾기
    public String getEmailFromRefreshToken(String refreshToken) {
        Jws<Claims> claimsJws = verifySignature(refreshToken);
        String email = claimsJws.getBody().getSubject();

        return email;
    }

    // String secretKey -> byte[] key 로 dncode -> 알고리즘 이용해서 키 생성
    private Key getKeyFromBase64EncodedKey(String secretKey) {
        byte[] keyBytes = Decoders.BASE64.decode(secretKey);
        return Keys.hmacShaKeyFor(keyBytes);
    }

    // int expirationMinutes -> Date 로 변환
    public Date getTokenExpirationDate(int expirationMinutes) {
        Calendar calendar = Calendar.getInstance();
        calendar.add(Calendar.MILLISECOND, expirationMinutes);
        return calendar.getTime();
    }
}








