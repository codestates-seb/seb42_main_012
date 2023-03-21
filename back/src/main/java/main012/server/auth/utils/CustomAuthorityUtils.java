package main012.server.auth.utils;

import main012.server.user.entity.Role;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Component
public class CustomAuthorityUtils {

    // 토큰의 Claim 을 기반으로 권한 정보 생성
    public List<GrantedAuthority> createAuthorities(String roles) {
        roles = roles
                .replace("[", "")
                .replace("]", "")
                .replace(" ", "");

        List<String> roleNames = List.of(roles.split(","));

        List<GrantedAuthority> authorities = roleNames.stream()
                .map(role -> new SimpleGrantedAuthority("ROLE_" + role))
                .collect(Collectors.toList());

        return authorities;
    }

    // DB에 저장된 Role을 기반으로 권한 정보 생성
    public List<GrantedAuthority> createAuthorities(Set<Role> roles) {
        List<GrantedAuthority> authorities = roles.stream()
                .map(role -> new SimpleGrantedAuthority(role.getName()))
                .collect(Collectors.toList());

        return authorities;
    }

}
