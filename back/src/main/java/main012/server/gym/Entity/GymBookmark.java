package main012.server.gym.Entity;

import main012.server.user.entity.User;

import javax.persistence.*;

public class GymBookmark {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "gym_bookmark_id")
    private long id;

    @ManyToOne
    @JoinColumn(name = "gym_id")
    private Gym gym;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

}
