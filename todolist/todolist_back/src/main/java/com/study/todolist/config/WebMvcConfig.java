package com.study.todolist.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebMvcConfig implements WebMvcConfigurer {

    @Override   // 3. crossOrigin 은 다른 서버에서의 요청을 허용하도록
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")      // 어떤 요청이 들어오던 허용
                .allowedOriginPatterns("*")
                .allowedMethods("*")    // 어떤 method를 사용하던 허용
                .allowedHeaders("*")
                .allowCredentials(true);
    }
}
