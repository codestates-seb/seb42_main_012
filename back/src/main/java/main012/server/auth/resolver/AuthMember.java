package main012.server.auth.resolver;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

@Target(ElementType.PARAMETER) // 파라미터에 애너테이션 사용 가능
@Retention(RetentionPolicy.RUNTIME) // 리플렉션 등을 확용할 수 있도록 런타임까지 애너테이션 정보가 남아있음.
public @interface AuthMember {
}
