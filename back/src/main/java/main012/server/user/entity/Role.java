package main012.server.user.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@Entity
@NoArgsConstructor
public class Role {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "role_id")
    private Long id;

    @Column(length = 20, nullable = false)
    private String name;

    public Role(String name) {
        this.name = name;
    }

    @Override
    public String toString() {
        return this.name;
    }
}
