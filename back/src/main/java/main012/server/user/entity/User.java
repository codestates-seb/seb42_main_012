package main012.server.user.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import main012.server.common.Auditable;

import javax.persistence.*;

@NoArgsConstructor
@Getter
@Setter
@Entity
public class User extends Auditable {
    @Id
    @Column(name = "user_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(length = 100, nullable = false)
    private String displayName;

    @Column(nullable = false)
    private String email;

    @Column(length = 100, nullable = false)
    private String password;


}
