package main012.server.community.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import main012.server.auth.resolver.AuthMember;
import main012.server.community.dto.CommentDto;
import main012.server.community.dto.CommunityDto;
import main012.server.community.entity.CommunityComment;
import main012.server.community.mapper.CommentMapper;
import main012.server.community.service.CommentService;
import main012.server.community.service.CommunityService;
import main012.server.user.entity.Member;
import main012.server.user.service.MemberService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.annotation.security.RolesAllowed;
import java.util.List;

@Slf4j
@Validated
@RequestMapping("/communities/comments")
@RequiredArgsConstructor
@RestController
//@CrossOrigin
public class CommentController {

    private final CommentMapper mapper;
    private final MemberService memberService;
    private final CommunityService communityService;
    private final CommentService commentService;


    // 커뮤니티 댓글 등록
    @PostMapping("/{community_id}")
    @RolesAllowed("ROLE_USER")
    public ResponseEntity postComment(@PathVariable("community_id") Long communityId,
                                      @RequestBody CommentDto.Post post,
                                      @AuthMember Long memberId) {

        post.setCommunityId(communityId);
        CommunityComment response = commentService.createComment(mapper.commentPostDtoToComment(post, memberId));

        return new ResponseEntity<>(HttpStatus.CREATED);

    }

    // 커뮤니티 댓글 수정
    @PatchMapping("/{comment_id}")
    @RolesAllowed("ROLE_USER")
    public ResponseEntity patchComment(@PathVariable("comment_id") Long commentId,
                                       @RequestBody CommentDto.Patch patch,
                                       @AuthMember Long memberId) {

        patch.setCommentId(commentId);

        CommunityComment comment = mapper.commentPatchDtoToComment(patch);
        commentService.updateComment(comment);

        return new ResponseEntity<>(HttpStatus.OK);
    }

    // 커뮤니티 댓글 조회
    @GetMapping("/{community_id}")
    @RolesAllowed("ROLE_USER")
    public ResponseEntity getComment(@PathVariable("community_id") Long communityId,
                                     @RequestParam String lastFeedId,
                                     @AuthMember Long memberId) {

        communityService.findExistCommunity(communityId);

        CommunityDto.listResponse responses = commentService.findComments(communityId, lastFeedId);

        return new ResponseEntity<>(responses, HttpStatus.OK);
    }

    // 커뮤니티 댓글 삭제
    @DeleteMapping("/{comment_id}")
    @RolesAllowed("ROLE_USER")
    public ResponseEntity deleteComment(@PathVariable("comment_id") Long commentId,
                                        @AuthMember Long memberId) {

        commentService.deleteComment(commentId);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

}
