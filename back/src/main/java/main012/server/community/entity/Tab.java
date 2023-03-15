package main012.server.community.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@NoArgsConstructor
@Setter
@Getter
@Entity
public class Tab {

    @Id
    @Column(name = "community_tab_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String tabName;

    // N : M
    @ManyToMany(mappedBy = "tabs")
    private List<Community> communities = new ArrayList<>();
}
