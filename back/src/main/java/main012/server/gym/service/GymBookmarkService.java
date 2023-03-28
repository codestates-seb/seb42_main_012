package main012.server.gym.service;

import lombok.RequiredArgsConstructor;
import main012.server.exception.BusinessLoginException;
import main012.server.exception.ExceptionCode;
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
    private final MemberServiceImpl memberServiceImpl;
    private final GymService gymService;

    public Gym addGymBookmark(Long memberId, Long gymId) {

        Member member = memberRepository.findById(memberId).orElseThrow(() -> new BusinessLoginException(ExceptionCode.MEMBER_NOT_FOUND));
        Gym gym = gymRepository.findById(gymId).orElseThrow(() -> new BusinessLoginException(ExceptionCode.GYM_NOT_FOUND));
        Optional<GymBookmark> foundBookmark = gymBookmarkRepository.findByMemberAndGym(member, gym);

        if (foundBookmark.isPresent()) {
            gymBookmarkRepository.delete(foundBookmark.orElseThrow(() -> new BusinessLoginException(ExceptionCode.GYMREVIEW_NOT_FOUND)));
        } else {
            GymBookmark gymBookmark = new GymBookmark(member, gym);
            gymBookmarkRepository.save(gymBookmark);
        }
        return gym;
    }
}





