package main012.server.image.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import main012.server.community.entity.Community;

import javax.persistence.*;

@Getter
@Setter
@Entity
@NoArgsConstructor
public class CommunityImage {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "community_image_id")
    private Long id;

    @ManyToOne
    @JoinColumn(name = "community_id")
    private Community community;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "image_id")
    private Image image;
}
