package main012.server.gyms.Controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping(value = "gyms",produces = {MediaType.APPLICATION_JSON_VALUE})
@Validated
public class GymsController {
    @PostMapping
    public String postGyms(@RequestParam("gymName") String gymName,
                           @RequestParam("address") String address,
                           @RequestParam("phoneNumber") long phoneNumber,
                           @RequestParam("prices") long prices,
                           @RequestParam("offDays") String offDays,
                           @RequestParam("openingTime") long openingTime,
                           @RequestParam("facilities") String facilities) {
        Map<String, String> map = new HashMap<>();
        map.put("gymName",gymName);
        map.put("address",address);
        map.put("phoneNumber",phoneNumber);
        map.put("prices",prices);
        map.put("offDays",offDays);
        map.put("openingTime",openingTime);
        map.put("facilities",facilities);

        return new ResponseEntity<>(map, HttpStatus.CREATED);
    }

    @GetMapping("{gym_id}")
    public ResponseEntity getGyms(@PathVariable("gym_id") long gymId) {
        return new ResponseEntity<>(HttpStatus.OK);
    }

    // 헬스장 전체조회
    @GetMapping ResponseEntity getGyms() {
        System.out.println("# get Gyms");

        return new ResponseEntity<>(HttpStatus.OK);
    }

}
