package main012.server.community.service;

import lombok.RequiredArgsConstructor;
import main012.server.community.dto.CommentDto;
import main012.server.community.dto.CommunityDto;
import main012.server.community.entity.Community;
import main012.server.community.entity.CommunityComment;
import main012.server.community.mapper.CommentMapper;
import main012.server.community.repository.CommentRepository;
import main012.server.exception.BusinessLoginException;
import main012.server.exception.ExceptionCode;
import main012.server.user.entity.Member;
import main012.server.user.repository.MemberRepository;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
@RequiredArgsConstructor
public class CommentService {

    @Value("${mail.address.admin}")
    private String adminEmail;

    private final CommunityService communityService;
    private final CommentRepository commentRepository;
    private final CommentMapper commentMapper;
    private final MemberRepository memberRepository;


    // 커뮤니티 댓글 등록
    public CommentDto.RequestResponse createComment (CommunityComment comment) {

        // 댓글 달 게시물이 존재하는지 확인
        Community existCommunity = communityService.findExistCommunity(comment.getCommunity().getCommunityId());
        Member member = memberRepository.findById(comment.getMember().getId()).orElseThrow(() -> new BusinessLoginException(ExceptionCode.MEMBER_NOT_FOUND));
        comment.setMember(member);
        commentRepository.save(comment);



        CommentDto.RequestResponse response = new CommentDto.RequestResponse();
        response.setCommentId(comment.getCommentId());
        response.setCommunityId(comment.getCommunity().getCommunityId());
        response.setComment(comment.getComment());
        response.setDisplayName(comment.getMember().getDisplayName());
//        response.setProfileImage(comment.getMember().getImage().getImagePath());
        response.setCreatedAt(comment.getCreatedAt().toString());

        return response;
    }

    // 커뮤니티 댓글 수정
    public CommentDto.RequestResponse updateComment (CommunityComment comment, Long memberId) {

        // 댓글 존재하는지 확인
        CommunityComment existComment = findExistComment(comment.getCommentId());

        // 로그인한 멤버와 댓글 작성자 일치하는지 확인
        if(existComment.getMember().getId() != memberId){
            throw new BusinessLoginException(ExceptionCode.MEMBER_NOT_MATCHED);
        }

        //댓글 내용 수정
        Optional.ofNullable(comment.getComment())
                .ifPresent(editedComment -> existComment.setComment(editedComment));



        CommentDto.RequestResponse response = new CommentDto.RequestResponse();
        response.setCommentId(existComment.getCommentId());
        response.setCommunityId(existComment.getCommunity().getCommunityId());
        response.setComment(existComment.getComment());
        response.setDisplayName(existComment.getMember().getDisplayName());
//        response.setProfileImage(Optional.of(existComment.getMember().getImage().getImagePath()).orElse(""));
        response.setCreatedAt(existComment.getCreatedAt().toString());

        return response;


    }



    // 커뮤니티 댓글 조회
    public CommunityDto.ListResponse findComments (Long communityId, String lastFeedId) {

        int size = 15;
        Long feedId = getFeedId(lastFeedId);

        //커뮤니티 아이디로 댓글 조회
        Page<CommunityComment> comments =
                commentRepository.findByCommunityCommunityIdAndCommentIdLessThanOrderByCommentIdDesc(communityId, feedId, PageRequest.of(0, size));
        List<CommunityComment> contents = comments.getContent();

        int totalElements = contents.size();

        Long nextCursor;
        if (totalElements < size) {
            nextCursor = -1L;
        } else {
            nextCursor = contents.get(size - 1).getCommentId();
        }


        List<CommentDto.Response> responseList = commentMapper.commentsToCommentResponseDtos(contents);

        CommunityDto.ListResponse response = new CommunityDto.ListResponse();
        response.setContents(responseList);
        response.setTotalElements(totalElements);
        response.setNextCursor(nextCursor);


        return response;
    }
    private Long getFeedId(String lastFeedId) {
        Long feedId;
        if (lastFeedId.isEmpty()) {
            feedId = 9223372036854775807L;
        } else if (!lastFeedId.matches("[+-]?\\d+")) {
            throw new BusinessLoginException(ExceptionCode.REQUEST_NOT_SUPPORT);
        } else {
            feedId = Long.valueOf(lastFeedId);
        }
        return feedId;
    }


    // 커뮤니티 댓글 삭제
    public void deleteComment (Long commentId, Long memberId) {

        // 댓글이 존재하는지 확인 -> 삭제
        CommunityComment existComment = findExistComment(commentId);

        Member member = memberRepository.findById(memberId).orElseThrow(() -> new BusinessLoginException(ExceptionCode.MEMBER_NOT_FOUND));


        // 댓글 작성자와 로그인한 멤버/관리자 이메일이 일치하는지 확인
        if(existComment.getMember().getId() != memberId || !(member.getEmail()).equals(adminEmail)){
            throw new BusinessLoginException(ExceptionCode.MEMBER_NOT_MATCHED);
        }
        commentRepository.delete(existComment);
    }

    // 존재하는 댓글인지 확인하는 메서드
    private CommunityComment findExistComment(Long commentId) {
        Optional<CommunityComment> optionalComment = commentRepository.findById(commentId);
        CommunityComment existComment = optionalComment.orElseThrow(
                () -> new BusinessLoginException(ExceptionCode.COMMENT_NOT_FOUND)
        );
        return existComment;
    }
}