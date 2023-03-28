package main012.server.image.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import main012.server.gym.entity.Gym;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;

@NoArgsConstructor
@Getter
@Setter
@Entity
public class GymImage {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "gym_image_id")
    private Long id;

    @ManyToOne
    @JoinColumn(name = "gym_id")
    @OnDelete(action = OnDeleteAction.CASCADE)
    private Gym gym;

    @OneToOne(cascade = CascadeType.ALL)  // gymImage 삭제되면 해당 image 로우값이 images 테이블에서 삭제됨
    @JoinColumn(name = "image_id")
    private Image image;

    public GymImage(Gym gym, Image image) {
        this.gym = gym;
        this.image = image;
    }
}
