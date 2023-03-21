package main012.server.community.entity;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import main012.server.common.audit.Auditable;
import main012.server.image.entity.CommunityImage;
import main012.server.user.entity.Member;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@NoArgsConstructor
@Setter
@Getter
@Entity
public class Community extends Auditable {
    @Id
    @Column(name = "community_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long communityId;

    @Column(length = 100, nullable = false)
    private String title;

    @Column(nullable = false, columnDefinition = "LONGTEXT")
    private String content;

    @Column(nullable = false)
    private long viewCnt;

    // N : 1
    @ManyToOne
    @JoinColumn(name = "member_id")
    private Member member;

    @ManyToOne
    @JoinColumn(name = "tab_id")
    private Tab tab;


    // 1 : N
    @Setter(AccessLevel.NONE)
    @OneToMany(mappedBy = "community", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<CommunityComment> communityComments = new ArrayList<>();

    @Setter(AccessLevel.NONE)
    @OneToMany(mappedBy = "community", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<CommunityBookmark> communityBookmarks = new ArrayList<>();

    // orphanRemoval => CommunityImage List 에서 remove(communityImage) 하면 해당 communityImage 객체의 로우값이 CommunityImage 테이블에서 자동 삭제됨
    @Setter(AccessLevel.NONE)
    @OneToMany(mappedBy = "community", fetch = FetchType.LAZY, cascade = CascadeType.ALL, orphanRemoval = true)
    private List<CommunityImage> communityImages = new ArrayList<>();


    // 양방향 매핑

    public void setCommunityComments(CommunityComment communityComment){
        this.communityComments.add(communityComment);
        if(communityComment.getCommunity() != this){
            communityComment.setCommunity(this);
        }
    }

    public void setCommunityBookmarks(CommunityBookmark communityBookmark){
        this.communityBookmarks.add(communityBookmark);
        if(communityBookmark.getCommunity() != this){
            communityBookmark.setCommunity(this);
        }
    }

    public void setCommunityImage (CommunityImage communityImage) {
        this.communityImages.add(communityImage);
        if (communityImage.getCommunity() != this) {
            communityImage.setCommunity(this);
        }
    }
}

