package main012.server.gym.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import main012.server.common.audit.Auditable;
import main012.server.user.entity.Member;

import javax.persistence.*;


@Getter
@Setter
@Entity
@NoArgsConstructor // extends Auditable 해야함
public class GymReview extends Auditable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "gym_review_id")
    private Long id;

    private long gymGrade;

    private String gymComment;

    @ManyToOne
    @JoinColumn(name = "member_id")
    private Member member;

    @ManyToOne
    @JoinColumn(name = "gym_id")
    private Gym gym;



}