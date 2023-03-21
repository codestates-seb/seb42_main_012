package main012.server.community.entity;

import lombok.AccessLevel;
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
    @Column(name = "tab_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long tabId;

    private String tabName;

    // 1 : N
    @Setter(AccessLevel.NONE)
    @OneToMany(mappedBy = "tab", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<Community> tabCommunities = new ArrayList<>();

    public void setCommunities(Community community){
        this.tabCommunities.add(community);
        if(community.getTab() != this) {
            community.setTab(this);
        }
    }

}
