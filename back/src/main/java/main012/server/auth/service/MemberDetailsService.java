package main012.server.auth.service;

import lombok.RequiredArgsConstructor;
import main012.server.auth.utils.CustomAuthorityUtils;
import main012.server.exception.BusinessLoginException;
import main012.server.exception.ExceptionCode;
import main012.server.image.entity.Image;
import main012.server.user.entity.Member;
import main012.server.user.enums.MemberStatus;
import main012.server.user.repository.MemberRepository;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

import java.util.Collection;
import java.util.Optional;

@RequiredArgsConstructor
@Component
public class MemberDetailsService implements UserDetailsService {
    private final MemberRepository memberRepository;
    private final CustomAuthorityUtils authorityUtils;


    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<Member> optionalMember = memberRepository.findByEmail(username);
        Member findMember = optionalMember.orElseThrow(() -> new BusinessLoginException(ExceptionCode.LOGIN_FAILED));

        if(findMember.getMemberStatus().equals(MemberStatus.MEMBER_DELETED)){
            throw new BusinessLoginException(ExceptionCode.QUITED_MEMBER);
        }

        return new MemberDetails(findMember);
    }

    public static class MemberDetails extends Member implements UserDetails {
        public MemberDetails(Member member) {
            setId(member.getId());
            setEmail(member.getEmail());
            setPassword(member.getPassword());
            setRoles(member.getRoles());
            setMemberStatus(member.getMemberStatus());
        }

        @Override
        public Collection<? extends GrantedAuthority> getAuthorities() {
            return authorityUtils.createAuthorities(this.getRoles());
        }

        @Override
        public String getUsername() {
            return getEmail();
        }
//
//        public String getProfileImage() {
//            String profileImage = null;
//            if (getImage() != null) {
//                profileImage = getImage().getImagePath();
//            }
//
//            return profileImage;
//        }
//
//        public String getDisplayName() {
//            return this.getDisplayName();
//        }

        @Override
        public boolean isAccountNonExpired() {
            return true;
        }

        @Override
        public boolean isAccountNonLocked() {
            return true;
        }

        @Override
        public boolean isCredentialsNonExpired() {
            return true;
        }

        @Override
        public boolean isEnabled() {
            return true;
        }

    }

}
