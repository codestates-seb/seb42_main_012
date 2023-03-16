package main012.server.gym.service;

import main012.server.gym.entity.Gym;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class GymService {
    public Gym createGym(Gym gym) {
        Gym createdGym = gym;
        return createdGym;
    }

    public Gym updateGym(Gym gym) {
        Gym updatedGym = gym;
        return updatedGym;
    }

    public Gym findGym(long gymId) {
        Gym gym =
                new Gym(gymId,"해리스짐","안녕","ㅇㄹ","ㅇㄹ","ㅇㄹ");
        return gym;
    }

    public List<Gym> findGyms() {
        List<Gym> gyms = List.of(
                new Gym(1, "dfw"),
                new Gym(2, "dfw")
        );
        return gyms;
    }

    public void deleteGym(long gymId){

    }
}
