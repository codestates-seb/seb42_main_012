package main012.server.gym.entity;


import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import main012.server.common.Auditable;
import main012.server.image.entity.GymImage;
import main012.server.user.entity.Member;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@Entity
@NoArgsConstructor

public class Gym extends Auditable{

    @Id
    @Column(name = "gym_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;


    private String gymName;

    @Column(nullable = false)
    private String address;


    private String phoneNumber;


    private String businessHours;

    @Column(nullable = false)
    private double latitude;

    @Column(nullable = false)
    private double longitude;


    // N : 1
    @ManyToOne // 유저는 여러개의 헬스장 등록을 할 수 있다.
    @JoinColumn(name = "member_id")
    private Member member;

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

    // 1 : N
    // orphanRemoval => GymImage List 에서 remove(gymImage) 하면 해당 gymImage 객체의 로우값이 GymImage 테이블에서 자동 삭제됨
    @Setter(AccessLevel.NONE)
    @OneToMany(mappedBy = "gym", fetch = FetchType.LAZY, cascade = CascadeType.ALL, orphanRemoval = true)
    private List<GymImage> gymImages = new ArrayList<>();

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

    public void setGymImage(GymImage gymImage) {
        this.gymImages.add(gymImage);
        if (gymImage.getGym() != this) {
            gymImage.setGym(this);
        }
    }

}
