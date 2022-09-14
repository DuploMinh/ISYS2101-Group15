package com.example.isys2101group15.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
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
