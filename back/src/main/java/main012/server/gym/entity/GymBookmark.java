package main012.server.gym.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import main012.server.user.entity.Member;

import javax.persistence.*;

@Getter
@Setter
@Entity
@NoArgsConstructor
public class GymBookmark {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "gym_bookmark_id")
    private Long id;

    @ManyToOne
    @JoinColumn(name = "gym_id")
    private Gym gym;

    @ManyToOne
    @JoinColumn(name = "member_id")
    private Member member;

}
