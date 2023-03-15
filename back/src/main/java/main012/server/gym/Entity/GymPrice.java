package main012.server.gym.Entity;

import javax.persistence.*;

public class GymPrice {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "gym_price_id")
    private Long id;

    private Long price;

    private String priceName;

    @ManyToOne
    @JoinColumn(name = "gym_id")
    private Gym gym;
}
