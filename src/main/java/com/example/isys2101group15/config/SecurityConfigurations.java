package com.example.isys2101group15.config;

import com.example.isys2101group15.service.CustomUserDetailService;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityCustomizer;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.provisioning.UserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;
@EnableWebSecurity
@Configuration
@RequiredArgsConstructor
public class SecurityConfigurations {
  @Bean
  public BCryptPasswordEncoder bCryptPasswordEncoder(){
    return new BCryptPasswordEncoder();
  }
  @Bean
  public UserDetailsService userDetailsService(){
    return new CustomUserDetailService();
  };

  @Bean
  public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
    http.csrf().disable()
        .authorizeRequests()
        .antMatchers("/api-docs","/swagger-ui/**", "/v3/api-docs/**","/v3/**").permitAll()
        .antMatchers("/food").permitAll()
        .antMatchers("/img/**").permitAll()
        .antMatchers("/login").permitAll()
        .antMatchers("/register/**").permitAll()
        .antMatchers("/users/**", "/settings/**").hasAnyAuthority("Admin")
        .anyRequest().permitAll()
        .and()
        .formLogin()
          .loginPage("/login.html")
          .usernameParameter("email")
          .permitAll()
        .and()
        .logout()
          .logoutUrl("/logout")
          .deleteCookies("JSESSIONID");
    http.userDetailsService(userDetailsService());
    http.authenticationProvider(authenticationProvider());
    return http.build();
  }
  @Bean
  public DaoAuthenticationProvider authenticationProvider(){
    DaoAuthenticationProvider authenticationProvider = new DaoAuthenticationProvider();
    authenticationProvider.setUserDetailsService(userDetailsService());
    authenticationProvider.setPasswordEncoder(bCryptPasswordEncoder());
    return authenticationProvider;
  }
//  @Bean
//  public WebSecurityCustomizer webSecurityCustomizer(){
//    return (web) -> web.ignoring().antMatchers("/img/**");
//  }
}
