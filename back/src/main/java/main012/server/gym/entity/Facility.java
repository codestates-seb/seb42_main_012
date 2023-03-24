package main012.server.gym.entity;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@Entity
@NoArgsConstructor
public class Facility {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "facility_id")
    private Long id;

    private String facilityName;

    // 1 : N
    @Setter(AccessLevel.NONE)
    @OneToMany(mappedBy = "facility", cascade = CascadeType.ALL,fetch = FetchType.LAZY)
    private List<Gym> facilityGyms = new ArrayList<>();

    public void setGyms(Gym gym) {
        this.facilityGyms.add(gym);
        if(gym.getFacility() != this) {
            gym.setFacility(this);
        }
    }


}
