package main012.server.community.service;

import lombok.RequiredArgsConstructor;
import main012.server.community.entity.CommunityComment;
import main012.server.community.repository.CommentRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@Transactional
@RequiredArgsConstructor
public class CommentService {

    private final CommunityService communityService;
    private final CommentRepository commentRepository;


    // 커뮤니티 댓글 등록
    public CommunityComment createComment (CommunityComment comment) {

        // 댓글 달 게시물이 존재하는지 확인
        communityService.findExistCommunity(comment.getCommunity().getCommunityId());

        CommunityComment response = commentRepository.save(comment);
        return response;
    }

    // 커뮤니티 댓글 수정
    public CommunityComment updateComment (CommunityComment comment) {

        // 댓글 존재하는지 확인
        CommunityComment existComment = findExistComment(comment.getCommentId());

        //댓글 내용 수정
        Optional.ofNullable(comment.getComment())
                .ifPresent(editedComment -> existComment.setComment(editedComment));

        CommunityComment response = commentRepository.save(existComment);
        return response;
    }



    // 커뮤니티 댓글 조회
    public List<CommunityComment> findComments (Long communityId) {

        // 전체 댓글 목록 조회
        List<CommunityComment> allComments = commentRepository.findAll();

        // 전체 댓글 중 특정 게시글에 달린 댓글만 필터링
        List<CommunityComment> response =
                allComments.stream().filter(comment -> comment.getCommunity().getCommunityId() == communityId)
                        .collect(Collectors.toList());

        return response;
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
                () -> new RuntimeException("댓글이 존재하지 않음")
        );
        return existComment;
    }
}