package main012.server.gym.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Getter
@Setter
@Entity
@NoArgsConstructor
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
