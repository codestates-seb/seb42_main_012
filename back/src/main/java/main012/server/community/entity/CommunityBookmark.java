package main012.server.community.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import main012.server.user.entity.Member;

import javax.persistence.*;

@NoArgsConstructor
@Setter
@Getter
@Entity
public class CommunityBookmark {

    @Id
    @Column(name = "community_bookmark_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // N : 1
    @ManyToOne
    @JoinColumn(name = "member_id")
    private Member member;

    @ManyToOne
    @JoinColumn(name = "community_id")
    private Community community;

}
