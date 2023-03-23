package main012.server.gym.service;

import lombok.RequiredArgsConstructor;
import lombok.Setter;
import main012.server.gym.entity.Gym;
import main012.server.gym.entity.GymBookmark;
import main012.server.gym.repository.GymBookmarkRepository;
import main012.server.user.entity.Member;
import main012.server.user.repository.MemberRepository;
import main012.server.user.service.MemberServiceImpl;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class GymBookmarkService {
    private final GymBookmarkRepository gymBookmarkRepository;
    private final GymService gymService;
    private final MemberServiceImpl memberServiceImpl;
    private final MemberRepository memberRepository;

//    public Gym GymBookmarkUP(Long memberId, Long gymId) {
//        Member member = memberServiceImpl.findVerifyMember(memberId); // 좋아요 누르는 회원
//        Gym gym = gymService.findGym(gymId);
//        Member gymMember = memberServiceImpl.findVerifyMember(gym.getMember().getId()); // 헬스장 등록자
//
//        GymBookmark gymBookmark = gymBookmarkRepository.findByMemberAndGym(member,gym);
//
//        gymBookmarkRepository.save(gymBookmark);
//        memberRepository.save(member);
//        memberRepository.save(gymMember);
//
//        return gymService.findGym(gymId);
//    }

}
