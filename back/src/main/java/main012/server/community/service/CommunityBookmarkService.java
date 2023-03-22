package main012.server.community.service;

import lombok.RequiredArgsConstructor;
import main012.server.community.entity.Community;
import main012.server.community.entity.CommunityBookmark;
import main012.server.community.repository.CommunityBookmarkRepository;
import main012.server.community.repository.CommunityRepository;
import main012.server.user.entity.Member;
import main012.server.user.repository.MemberRepository;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Optional;

@Service
@Transactional
@RequiredArgsConstructor
public class CommunityBookmarkService {
    private final CommunityBookmarkRepository bookmarkRepository;
    private final CommunityRepository communityRepository;

    private final MemberRepository memberRepository;
    public void addBookmark(Long memberId, Long communityId) {

        Member member = memberRepository.findById(memberId).orElseThrow(() -> new RuntimeException("존재하지 않는 멤버"));

        Community community = communityRepository.findById(communityId).orElseThrow(() -> new RuntimeException("존재하지 않는 게시글"));

        Optional<CommunityBookmark> foundBookmark = bookmarkRepository.findByMemberAndCommunity(member, community);

        if (foundBookmark.isPresent()) {
            bookmarkRepository.delete(foundBookmark.orElseThrow(() -> new RuntimeException("존재하지 않는 북마크")));
        } else {
            CommunityBookmark bookmark = new CommunityBookmark(member, community);
            bookmarkRepository.save(bookmark);
        }
    }

}
