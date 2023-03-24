package main012.server.auth.resolver;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import main012.server.auth.jwt.JwtTokenizer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.MethodParameter;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.support.WebDataBinderFactory;
import org.springframework.web.context.request.NativeWebRequest;
import org.springframework.web.method.support.HandlerMethodArgumentResolver;
import org.springframework.web.method.support.ModelAndViewContainer;

@Slf4j
@Component
@RequiredArgsConstructor
public class MemberArgumentResolver implements HandlerMethodArgumentResolver {

    @Autowired
    private JwtTokenizer jwtTokenizer;

    @Override // 주어진 메소드의 파라미터가 이 ArgumentResolve r에서 지원하는 타입인지 검사.
    public boolean supportsParameter(MethodParameter parameter) {
        return parameter.hasParameterAnnotation(AuthMember.class) && // @AuthMember 애너테이션 사용
                parameter.getParameterType().equals(Long.class); // 파라미터 타입이 Long 일 경우에만 resolveArgument() 수행 -> 다른 타입이면 null이 들어감.
    }

    @Override // 이 메소드의 반환값이 대상이 되는 메소드의 파라미터에 바인딩됨.
    public Object resolveArgument(MethodParameter parameter, ModelAndViewContainer mavContainer, NativeWebRequest webRequest, WebDataBinderFactory binderFactory) throws Exception {

        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        Long memberId = Long.parseLong((String) authentication.getPrincipal());

        log.info("## resolveArgument memberId : {}", memberId);

        return memberId;
    }
}
