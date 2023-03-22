package main012.server.gym.service;

import lombok.RequiredArgsConstructor;
import main012.server.gym.repository.FacilitiesRepository;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class FacilitiesService {
    private final FacilitiesRepository facilitiesRepository;


}
