package main012.server.community.service;

import lombok.RequiredArgsConstructor;
import main012.server.community.entity.Community;
import main012.server.community.entity.CommunityBookmark;
import main012.server.community.repository.CommunityBookmarkRepository;
import main012.server.community.repository.CommunityRepository;
import main012.server.exception.BusinessLoginException;
import main012.server.exception.ExceptionCode;
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

    // 게시글 찜 등록 & 취소
    public void addBookmark(Long memberId, Long communityId) {

        Member member = memberRepository.findById(memberId).orElseThrow(() -> new BusinessLoginException(ExceptionCode.MEMBER_NOT_FOUND));

        Community community = communityRepository.findById(communityId).orElseThrow(() -> new BusinessLoginException(ExceptionCode.COMMUNITY_NOT_FOUND));

        Optional<CommunityBookmark> foundBookmark = bookmarkRepository.findByMemberAndCommunity(member, community);

        if (foundBookmark.isPresent()) {
            bookmarkRepository.delete(foundBookmark.orElseThrow(() -> new BusinessLoginException(ExceptionCode.COMMUNITY_BOOKMARK_NOT_FOUND)));
        } else {
            CommunityBookmark bookmark = new CommunityBookmark(member, community);
            bookmarkRepository.save(bookmark);
        }
    }

}
