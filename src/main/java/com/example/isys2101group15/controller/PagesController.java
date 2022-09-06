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
}
