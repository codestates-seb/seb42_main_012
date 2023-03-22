package main012.server.community.mapper;

import main012.server.community.dto.CommentDto;
import main012.server.community.entity.Community;
import main012.server.community.entity.CommunityComment;
import main012.server.user.entity.Member;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface CommentMapper {

    default CommunityComment commentPostDtoToComment(CommentDto.Post post, Long memberId){
        CommunityComment comment = new CommunityComment();

        Member member = new Member();
        member.setId(memberId);

        Community community = new Community();
        community.setCommunityId(post.getCommunityId());

        comment.setComment(post.getComment());

        comment.setMember(member);
        comment.setCommunity(community);


        return comment;
    };

    CommunityComment commentPatchDtoToComment(CommentDto.Patch patch);

    default CommentDto.Response commentToResponseDto(CommunityComment comment){
        CommentDto.Response commentResponseDto = new CommentDto.Response(
                comment.getComment(),
                comment.getMember().getDisplayName(),
                comment.getCommentId(),
                comment.getCommunity().getCommunityId()
        );
        return commentResponseDto;
    };

    List<CommentDto.Response> commentsToCommentResponseDtos(List<CommunityComment> comments);

}
