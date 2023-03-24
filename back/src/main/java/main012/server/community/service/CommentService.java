package main012.server.community.service;

import lombok.RequiredArgsConstructor;
import main012.server.community.dto.CommentDto;
import main012.server.community.dto.CommunityDto;
import main012.server.community.entity.CommunityComment;
import main012.server.community.mapper.CommentMapper;
import main012.server.community.repository.CommentRepository;
import main012.server.exception.BusinessLoginException;
import main012.server.exception.ExceptionCode;
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

    private final CommunityService communityService;
    private final CommentRepository commentRepository;
    private final CommentMapper commentMapper;


    // 커뮤니티 댓글 등록
    public CommunityComment createComment (CommunityComment comment) {

        // 댓글 달 게시물이 존재하는지 확인
        communityService.findExistCommunity(comment.getCommunity().getCommunityId());

        CommunityComment response = commentRepository.save(comment);
        return response;
    }

    // 커뮤니티 댓글 수정
    public void updateComment (CommunityComment comment) {

        // 댓글 존재하는지 확인
        CommunityComment existComment = findExistComment(comment.getCommentId());

        //댓글 내용 수정
        Optional.ofNullable(comment.getComment())
                .ifPresent(editedComment -> existComment.setComment(editedComment));

    }



    // 커뮤니티 댓글 조회
    public CommunityDto.listResponse findComments (Long communityId, String lastFeedId) {

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

        CommunityDto.listResponse response = new CommunityDto.listResponse();
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
    public void deleteComment (Long commentId) {
        // 댓글이 존재하는지 확인 -> 삭제
        CommunityComment existComment = findExistComment(commentId);
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