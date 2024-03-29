package main012.server.user.entity;

import lombok.*;
import main012.server.common.audit.Auditable;
import main012.server.community.entity.Community;
import main012.server.community.entity.CommunityBookmark;
import main012.server.community.entity.CommunityComment;
import main012.server.gym.entity.Gym;
import main012.server.gym.entity.GymBookmark;
import main012.server.gym.entity.GymReview;
import main012.server.image.entity.Image;
import main012.server.user.enums.MemberStatus;
import org.hibernate.annotations.Formula;

import javax.persistence.*;
import java.util.*;

@NoArgsConstructor
@Getter
@Setter
@Entity
public class Member extends Auditable {
    @Id
    @Column(name = "member_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(length = 100, nullable = false)
    private String displayName;

    @Column(nullable = false, updatable = false, unique = true) // email 수정 불가, 유니크 O
    private String email;

    @Column(length = 100, nullable = false)
    private String password;

    @Enumerated(EnumType.STRING)
    @Column(length = 20, nullable = false)
    private MemberStatus memberStatus = MemberStatus.MEMBER_ACTIVE;

    @Column(nullable = true)
    private String businessNumber;

    // N : N
    @ManyToMany(cascade = {CascadeType.DETACH, CascadeType.PERSIST}, fetch = FetchType.EAGER)
    @JoinTable(
            name = "member_role",
            joinColumns = @JoinColumn(name = "member_id"),
            inverseJoinColumns = @JoinColumn(name = "role_id")
    )
    private Set<Role> roles = new HashSet<>();

    public void addRole(Role role) {
        this.roles.add(role);
    }

    // 1 : 1
    // 오펀 붙어 있어야 user.setImage(null) 했을 때, image 테이블에서 매핑된 로우값이 삭제됨.
    @OneToOne(cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinColumn(name = "image_id")
    private Image image;

    // 1 : N
    @Setter(AccessLevel.NONE)
    @OneToMany(mappedBy = "member", fetch = FetchType.LAZY)
    private List<Community> communities = new ArrayList<>();

    @Setter(AccessLevel.NONE)
    @OneToMany(mappedBy = "member", fetch = FetchType.LAZY, cascade = CascadeType.ALL, orphanRemoval = true)
    private List<CommunityBookmark> communityBookmarks = new ArrayList<>();

    @Setter(AccessLevel.NONE)
    @OneToMany(mappedBy = "member", fetch = FetchType.LAZY)
    private List<CommunityComment> communityComments = new ArrayList<>();

    @Setter(AccessLevel.NONE)
    @OneToMany(mappedBy = "member", fetch = FetchType.LAZY, cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Gym> gyms = new ArrayList<>();

    @Setter(AccessLevel.NONE)
    @OneToMany(mappedBy = "member", fetch = FetchType.LAZY, cascade = CascadeType.ALL, orphanRemoval = true)
    private List<GymBookmark> gymBookmarks = new ArrayList<>();

    @Setter(AccessLevel.NONE)
    @OneToMany(mappedBy = "member", fetch = FetchType.LAZY)
    private List<GymReview> gymReviews = new ArrayList<>();

    /*
     * 양방향 매핑 설정
     */
    public void setCommunity(Community community) {
        this.communities.add(community);
        if (community.getMember() != this) {
            community.setMember(this);
        }
    }

    public void setCommunityBookmark(CommunityBookmark communityBookmark) {
        this.communityBookmarks.add(communityBookmark);
        if (communityBookmark.getMember() != this) {
            communityBookmark.setMember(this);
        }
    }

    public void setCommunityComment(CommunityComment communityComment) {
        this.communityComments.add(communityComment);
        if (communityComment.getMember() != this) {
            communityComment.setMember(this);
        }
    }

    public void setGym(Gym gym) {
        this.gyms.add(gym);
        if (gym.getMember() != this) {
            gym.setMember(this);
        }
    }

    public void setGymBookmark(GymBookmark gymBookmark) {
        this.gymBookmarks.add(gymBookmark);
        if (gymBookmark.getMember() != this) {
            gymBookmark.setMember(this);
        }
    }

    public void setGymReview(GymReview gymReview) {
        this.gymReviews.add(gymReview);
        if (gymReview.getMember() != this) {
            gymReview.setMember(this);
        }
    }

    // 생성자
    @Builder
    public Member(String displayName, String email, String password) {
        this.displayName = displayName;
        this.email = email;
        this.password = password;
    }


    public Member(Long id) {
        this.id = id;
    }

    // member formula
//    @Formula("(SELECT count(1) FROM community c WHERE c.member_id = member_id)")
//    private int boardPostCnt;
//
//    @Formula("(SELECT count(1) FROM community_comment cm WHERE cm.member_id = member_id)")
//    private int boardCommentCnt;
//
//    @Formula("(SELECT count(1) FROM gym_review gr WHERE gr.member_id = member_id)")
//    private int gymReviewCnt;
//
//    @Formula("(SELECT count(1) FROM community_bookmark cb WHERE cb.member_id = member_id)")
//    private int boardBookmarkCnt;
//
//    @Formula("(SELECT count(1) FROM gym_bookmark gb WHERE gb.member_id = member_id)")
//    private int gymBookmarkCnt;
}
