package main012.server.gym.entity;


import lombok.*;
import main012.server.common.audit.Auditable;
import main012.server.image.entity.GymImage;
import main012.server.user.entity.Member;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class Gym extends Auditable {
    @Id
    @Column(name = "gym_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(length = 100, nullable = false, updatable = false, unique = true) // 헬스장 이름은 unique
    private String gymName;

    @Column(length = 100, nullable = false)
    private String address;

    @Column(length = 15, nullable = false)
    private String phoneNumber;

    @Column(length = 100, nullable = false)
    private String businessHours;

    @Column(length = 100, nullable = false)
    private String price; // 대표 가격

    @Column(length = 100, nullable = false)
    private String detailPrices; // 상세 가격

    @Column(length = 100, nullable = false)
    private Double latitude; // 위도

    @Column(length = 100, nullable = false)
    private Double longitude; // 경도

    // N : 1
    @ManyToOne(fetch = FetchType.LAZY) // 유저는 여러개의 헬스장 등록을 할 수 있다.
    @JoinColumn(name = "member_id")
    private Member member;

    // N : N
    @ManyToMany(cascade = {CascadeType.DETACH, CascadeType.PERSIST}, fetch = FetchType.EAGER)
    @JoinTable(
            name = "gym_facility",
            joinColumns = @JoinColumn(name = "gym_id"),
            inverseJoinColumns = @JoinColumn(name = "facility_id")
    )
    private List<Facility> facilities = new ArrayList<>();

    public void addFacility(Facility facility) {
        this.facilities.add(facility);
    }

    // 1 : N
    @Setter(AccessLevel.NONE)
    @OneToMany(mappedBy = "gym", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<GymBookmark> gymBookmarks = new ArrayList<>();


    // 1: N
    @Setter(AccessLevel.NONE)
    @OneToMany(mappedBy = "gym", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<GymReview> gymReviews = new ArrayList<>();


    // 1 : N
    // orphanRemoval => GymImage List 에서 remove(gymImage) 하면 해당 gymImage 객체의 로우값이 GymImage 테이블에서 자동 삭제됨
    @Setter(AccessLevel.NONE)
    @OneToMany(mappedBy = "gym", fetch = FetchType.LAZY, cascade = CascadeType.ALL, orphanRemoval = true)
    private List<GymImage> gymImages = new ArrayList<>();

    /*
     * 양방향 매핑 설정
     */

    public void setGymBookmarks(GymBookmark gymBookmark) {
        this.gymBookmarks.add(gymBookmark);
        if (gymBookmark.getGym() != this) {
            gymBookmark.setGym(this);
        }
    }


    public void setGymReview(GymReview gymReview) {
        this.gymReviews.add(gymReview);
        if (gymReview.getGym() != this) {
            gymReview.setGym(this);
        }
    }

    public void setGymImage(GymImage gymImage) {
        this.gymImages.add(gymImage);
        if (gymImage.getGym() != this) {
            gymImage.setGym(this);
        }
    }

    // 생성자
    public Gym(String gymName) {
        this.gymName = gymName;
    }

    public Gym(String gymName, String address, String phoneNumber, String businessHours, String price, String detailPrices, Double latitude, Double longitude) {
        this.gymName = gymName;
        this.address = address;
        this.phoneNumber = phoneNumber;
        this.businessHours = businessHours;
        this.price = price;
        this.detailPrices = detailPrices;
        this.latitude = latitude;
        this.longitude = longitude;
    }


    public Double distanceMeter(Double oLat, Double oLng) {
        Double myLat = latitude;
        Double myLng = longitude;

        Double theta = myLng - oLng;
        Double dist = Math.sin(deg2rad(myLat)) * Math.sin(deg2rad(oLat)) + Math.cos(deg2rad(myLat)) * Math.cos(deg2rad(oLat)) * Math.cos(deg2rad(theta));
        dist = Math.acos(dist);
        dist = rad2deg(dist);
        dist *= 60 * 1.1515;

        return dist * 1609.344;
    }

    private Double deg2rad(Double deg) {
        return deg * Math.PI / 180.0;
    }

    private Double rad2deg(Double rad) {
        return rad * 180.0 / Math.PI;
    }
}
