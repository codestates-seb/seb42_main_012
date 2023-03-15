package main012.server.gym.Entity;


import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import main012.server.common.Auditable;
import main012.server.user.entity.User;

import javax.persistence.*;

@Getter
@Setter
@Entity
@NoArgsConstructor
public class Gym extends Auditable {

    @Id
    @Column(name = "gym_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(length = 100, nullable = false)
    private String gymName;

    @Column(nullable = false)
    private String address;

    @Column(nullable = false)
    private String phoneNumber;

    @Column(nullable = false)
    private long prices;

    @Column(nullable = false)
    private String offDays;
    @Column(nullable = false)
    private String openingTime;

    @Column(nullable = false)
    private String facilities;

    @Column(nullable = false)
    private long latitude;

    @Column(nullable = false)



    @OneToMany // 유저는 여러개의 헬스장 등록을 할 수 있다.
    @JoinColumn(name = "USER_ID")
    private User user;







}
