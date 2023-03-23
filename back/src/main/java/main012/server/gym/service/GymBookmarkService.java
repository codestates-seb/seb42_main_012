package main012.server.gym.service;

import lombok.RequiredArgsConstructor;
import lombok.Setter;
import main012.server.gym.entity.Gym;
import main012.server.gym.entity.GymBookmark;
import main012.server.gym.repository.GymBookmarkRepository;
import main012.server.gym.repository.GymRepository;
import main012.server.user.entity.Member;
import main012.server.user.repository.MemberRepository;
import main012.server.user.service.MemberServiceImpl;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@Transactional
@RequiredArgsConstructor
public class GymBookmarkService {
    private final GymBookmarkRepository gymBookmarkRepository;
    private final GymRepository gymRepository;
    private final MemberRepository memberRepository;

    public void addGymBookmark(Long memberId, Long gymId){

        Member member = memberRepository.findById(memberId).orElseThrow(() -> new RuntimeException("존재하지 않는 회원"));
        Gym gym = gymRepository.findById(gymId).orElseThrow(() -> new RuntimeException("존재하지 않는 회원"));
        Optional<GymBookmark> foundGymBookmark = gymBookmarkRepository.findByMemberAndGym(member, gym);

        if (foundGymBookmark.isPresent()) {
            gymBookmarkRepository.delete(foundGymBookmark.orElseThrow(() -> new RuntimeException("존재하지 않는 찜")));
        } else {
            GymBookmark bookmark = new GymBookmark(member, gym);
            gymBookmarkRepository.save(bookmark);
        }

    }

}
