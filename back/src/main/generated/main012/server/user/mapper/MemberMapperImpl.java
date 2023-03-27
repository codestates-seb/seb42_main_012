package main012.server.user.mapper;

import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import main012.server.community.entity.Community;
import main012.server.community.entity.CommunityBookmark;
import main012.server.community.entity.CommunityComment;
import main012.server.gym.entity.GymBookmark;
import main012.server.gym.entity.GymReview;
import main012.server.user.dto.MemberInfoDto.Comments;
import main012.server.user.dto.MemberInfoDto.Communities;
import main012.server.user.dto.MemberInfoDto.GymBookmarks;
import main012.server.user.dto.MemberInfoDto.GymReviews;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-03-27T15:08:55+0900",
    comments = "version: 1.4.2.Final, compiler: javac, environment: Java 11.0.18 (Azul Systems, Inc.)"
)
@Component
public class MemberMapperImpl implements MemberMapper {

    @Override
    public List<Communities> communityToCommunityInfos(List<Community> communities) {
        if ( communities == null ) {
            return null;
        }

        List<Communities> list = new ArrayList<Communities>( communities.size() );
        for ( Community community : communities ) {
            list.add( communityToCommunityInfo( community ) );
        }

        return list;
    }

    @Override
    public List<Communities> communityBookmarksToCommunityInfos(List<CommunityBookmark> communities) {
        if ( communities == null ) {
            return null;
        }

        List<Communities> list = new ArrayList<Communities>( communities.size() );
        for ( CommunityBookmark communityBookmark : communities ) {
            list.add( communityBookmarkToCommunityInfo( communityBookmark ) );
        }

        return list;
    }

    @Override
    public List<Comments> commentsToCommentInfos(List<CommunityComment> comments) {
        if ( comments == null ) {
            return null;
        }

        List<Comments> list = new ArrayList<Comments>( comments.size() );
        for ( CommunityComment communityComment : comments ) {
            list.add( commentToCommentInfo( communityComment ) );
        }

        return list;
    }

    @Override
    public List<GymBookmarks> gymsToGymInfos(List<GymBookmark> gymBookmarks) {
        if ( gymBookmarks == null ) {
            return null;
        }

        List<GymBookmarks> list = new ArrayList<GymBookmarks>( gymBookmarks.size() );
        for ( GymBookmark gymBookmark : gymBookmarks ) {
            list.add( gymBookmarkToGymBookmarkInfo( gymBookmark ) );
        }

        return list;
    }

    @Override
    public List<GymReviews> gymReviewsToGymReviewInfos(List<GymReview> gymReviews) {
        if ( gymReviews == null ) {
            return null;
        }

        List<GymReviews> list = new ArrayList<GymReviews>( gymReviews.size() );
        for ( GymReview gymReview : gymReviews ) {
            list.add( gymReviewToGymReviewInfo( gymReview ) );
        }

        return list;
    }
}
