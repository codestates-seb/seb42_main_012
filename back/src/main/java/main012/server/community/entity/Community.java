package main012.server.community.entity;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import main012.server.common.Auditable;
import main012.server.user.entity.User;

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
    private Long id;

    @Column(length = 100, nullable = false)
    private String title;

    @Column(nullable = false)
    private String content;

    @Column(nullable = false)
    private long viewCnt;

    // N : 1
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;


    // 1 : N
    @Setter(AccessLevel.NONE)
    @OneToMany(mappedBy = "community", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<CommunityComment> communityComments = new ArrayList<>();

    @OneToMany(mappedBy = "community", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<CommunityBookmark> communityBookmarks = new ArrayList<>();


    // N : N
    @Setter(AccessLevel.NONE)
    @ManyToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinTable(
            name = "community_tab",
            joinColumns = @JoinColumn(name = "community_id"),
            inverseJoinColumns = @JoinColumn(name = "tab_id")
    )
    private List<Tab> tabs = new ArrayList<>();


    // 양방향 매핑
    public void setUser(User user) {
        this.user = user;
        if(!this.user.getCommunities().contains(this)){
            this.user.getCommunities().add(this);
        }
    }

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

}

