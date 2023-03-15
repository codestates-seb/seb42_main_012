package main012.server.community.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@NoArgsConstructor
@Setter
@Getter
@Entity
public class CommunityImage {

    @Id
    @Column(name = "community_image_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // 추후 수정 예정

}
