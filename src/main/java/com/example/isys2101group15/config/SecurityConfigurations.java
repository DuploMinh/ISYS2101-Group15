package com.example.isys2101group15.config;

import org.springframework.context.annotation.Bean;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;

public class SecurityConfigurations {

  @Bean
  public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
    http.authorizeHttpRequests(
        (authz)-> authz
            .anyRequest().authenticated()
    ).httpBasic(Customizer.withDefaults());
    return http.build();
  }
}
