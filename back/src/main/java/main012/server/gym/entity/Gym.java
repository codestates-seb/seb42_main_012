package main012.server.gym.entity;


import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import main012.server.common.Auditable;
import main012.server.user.entity.User;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@Entity
@NoArgsConstructor

public class Gym extends Auditable{

//    @Id
//    @Column(name = "gym_id")
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private Long id;
    private long gymId;


    private String gymName;

    @Column(nullable = false)
    private String address;


    private String phoneNumber;


    private String offDays;

    private String openingTime;

//    @Column(nullable = false)
//    private double latitude;
//
//    @Column(nullable = false)
//    private double longitude;


    // N : 1
    @Setter(AccessLevel.NONE)
    @ManyToOne // 유저는 여러개의 헬스장 등록을 할 수 있다.
    @JoinColumn(name = "user_id")
    private User user;

    // 1 : N
    @Setter(AccessLevel.NONE)
    @OneToMany(mappedBy = "gym", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<GymBookmark> gymBookmarks = new ArrayList<>();

    // 1: N
    @Setter(AccessLevel.NONE)
    @OneToMany(mappedBy = "gym", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<GymPrice> gymPrices = new ArrayList<>();

    // 1: N
    @Setter(AccessLevel.NONE)
    @OneToMany(mappedBy = "gym", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<GymReview> gymReviews = new ArrayList<>();

    // 1 : N
    @Setter(AccessLevel.NONE)
    @OneToMany(mappedBy = "gym", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<GymFacility> gymFacilities = new ArrayList<>();


    /*
    * 양방향 매핑 설정
    */

    public void setGymBookmarks (GymBookmark gymBookmark) {
        this.gymBookmarks.add(gymBookmark);
        if (gymBookmark.getGym() != this) {
            gymBookmark.setGym(this);
        }
    }

    public void setGymPrice (GymPrice gymPrice) {
        this.gymPrices.add(gymPrice);
        if(gymPrice.getGym() != this) {
            gymPrice.setGym(this);
        }
    }

    public void setGymReview(GymReview gymReview){
        this.gymReviews.add(gymReview);
        if(gymReview.getGym() != this) {
            gymReview.setGym(this);
        }
    }

    public void setGymFacility(GymFacility gymFacility){
        this.gymFacilities.add(gymFacility);
        if (gymFacility.getGym() != this) {
            gymFacility.setGym(this);
        }
    }


}
