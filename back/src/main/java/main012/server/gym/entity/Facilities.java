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
public class Facilities {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "facility_id")
    private Long facilitiesId;

    private String facilityName;

    // 1:N
    @Setter(AccessLevel.NONE)
    @OneToMany(mappedBy = "facilities",cascade = CascadeType.ALL,fetch = FetchType.LAZY)
    private List<GymFacility> facilityGyms = new ArrayList<>();

    public void setGymFacilities(GymFacility gymFacility) {
        this.facilityGyms.add(gymFacility);
        if(gymFacility.getFacilities() != this) {
            gymFacility.setFacilities(this);
        }
    }


}
