package main012.server.gym.Entity;

import main012.server.common.Auditable;
import main012.server.user.entity.User;

import javax.persistence.*;

public class GymReview extends Auditable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "gym_review_id")
    private Long id;

    private long grade;

    private String comment;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne
    @JoinColumn(name = "gym_id")
    private Gym gym;
}
