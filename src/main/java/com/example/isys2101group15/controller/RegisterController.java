package com.example.isys2101group15.controller;

import com.example.isys2101group15.entity.UserEntity;
import com.example.isys2101group15.repository.UserEntityRepository;
import java.util.Objects;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;


@Controller
@RequestMapping("/register")
@RequiredArgsConstructor
public class RegisterController
{
  private final UserEntityRepository userEntityRepository;
  @GetMapping()
  public String registerPage(){
    return "registration";
  }
  @PostMapping()
  public HttpStatus registerHandle(
      @RequestBody String r_email,
      @RequestBody String r_password,
      @RequestBody String re_password,
      @RequestBody String name){
    if (!Objects.equals(r_password, re_password)){
      return HttpStatus.BAD_REQUEST;
    }
    UserEntity u = new UserEntity();
    u.setUserName(r_email);
    u.setEmail(r_email);
    u.setPassword(r_password);
    userEntityRepository.save(u);
    return HttpStatus.ACCEPTED;
  }
}
