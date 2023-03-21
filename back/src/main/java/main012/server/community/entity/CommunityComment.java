package main012.server.community.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import main012.server.common.audit.Auditable;
import main012.server.user.entity.Member;

import javax.persistence.*;

@NoArgsConstructor
@Setter
@Getter
@Entity
public class CommunityComment extends Auditable {

    @Id
    @Column(name = "community_comment_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long commentId;

    @Column(nullable = false)
    private String comment;

    // N : 1
    @ManyToOne
    @JoinColumn(name = "member_id")
    private Member member;

    @ManyToOne
    @JoinColumn(name = "community_id")
    private Community community;

}
