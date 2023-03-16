package main012.server.image.entity;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import main012.server.user.entity.User;

import javax.persistence.*;

@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "images")
public class Image {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "image_id")
    private Long id;

    @Column(nullable = false)
    private String imageName; // S3에 저장된 이미지의 이름

    @Column(nullable = false)
    private String imagePath; // 이미지 url

//    // 1 :  1 - 이미지를 통해 유저에 접근할 일이 없으니까 여기선 연관관계 매핑을 안해줘도 됨. (일대일 단반향 매핑)
//    @OneToOne(mappedBy = "images")
//    private User user;

    @Builder
    public Image(String imageName, String imagePath) {
        this.imageName = imageName;
        this.imagePath = imagePath;
    }
}
