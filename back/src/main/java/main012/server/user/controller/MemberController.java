package main012.server.user.controller;

import lombok.RequiredArgsConstructor;
import main012.server.user.mapper.MemberMapper;
import main012.server.user.service.MemberService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/users")
@RequiredArgsConstructor
public class MemberController {

    private final MemberService memberService;

    private final MemberMapper memberMapper;


}
