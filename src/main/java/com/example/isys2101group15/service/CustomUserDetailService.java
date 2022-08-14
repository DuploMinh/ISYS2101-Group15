package com.example.isys2101group15.service;

import com.example.isys2101group15.entity.UserEntity;
import com.example.isys2101group15.repository.UserEntityRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service("userDetailService")
@RequiredArgsConstructor
public class CustomUserDetailService implements UserDetailsService {

  private UserEntityRepository userEntityRepository;
  @Override
  public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
    UserEntity user= userEntityRepository.findByUserName(username);
    return null;
  }

}
