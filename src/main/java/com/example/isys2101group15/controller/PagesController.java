package com.example.isys2101group15.controller;

import com.example.isys2101group15.entity.OrderEntity;
import com.example.isys2101group15.entity.Reservation;
import com.example.isys2101group15.entity.UserE;
import com.example.isys2101group15.repository.OrderRepository;
import com.example.isys2101group15.repository.ReservationRepository;
import com.example.isys2101group15.repository.UserEntityRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
@RequiredArgsConstructor
public class PagesController {

  @GetMapping("/delivery")
  public String deliveryPage(){
    return "delivery";
  }
  @GetMapping("/privacy")
  public String privacyPage(){
    return "delivery";
  }
  @GetMapping("/story")
  public String story(){
    return "story";
  }
  @GetMapping("/reservation")
  public String reservation(){
    return "reservation";
  }
  @GetMapping("/menu")
  public String menu(){return "menu";}
  @GetMapping("/header")
  public String header(){return "header";}
  @GetMapping("/footer")
  public String footer(){return "footer";}
  @GetMapping("/cart")
  public String cart(){return "cart";}
}
