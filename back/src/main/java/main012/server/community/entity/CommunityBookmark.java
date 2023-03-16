package main012.server.community.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import main012.server.user.entity.User;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

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
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne
    @JoinColumn(name = "community_id")
    private Community community;

}
