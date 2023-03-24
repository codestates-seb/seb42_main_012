package main012.server.community.mapper;

import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import main012.server.community.dto.CommentDto.Patch;
import main012.server.community.dto.CommentDto.Response;
import main012.server.community.entity.CommunityComment;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-03-24T15:51:32+0900",
    comments = "version: 1.4.2.Final, compiler: javac, environment: Java 11.0.18 (Azul Systems, Inc.)"
)
@Component
public class CommentMapperImpl implements CommentMapper {

    @Override
    public CommunityComment commentPatchDtoToComment(Patch patch) {
        if ( patch == null ) {
            return null;
        }

        CommunityComment communityComment = new CommunityComment();

        communityComment.setCommentId( patch.getCommentId() );
        communityComment.setComment( patch.getComment() );

        return communityComment;
    }

    @Override
    public List<Response> commentsToCommentResponseDtos(List<CommunityComment> comments) {
        if ( comments == null ) {
            return null;
        }

        List<Response> list = new ArrayList<Response>( comments.size() );
        for ( CommunityComment communityComment : comments ) {
            list.add( commentToResponseDto( communityComment ) );
        }

        return list;
    }
}
