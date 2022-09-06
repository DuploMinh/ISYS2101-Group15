package com.example.isys2101group15.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/booking")
public class BookingController {

  @PostMapping("/makeBooking")
  public boolean makeBooking(@RequestBody String name, @RequestBody String email, @RequestBody int time,
      @RequestBody(required = false)  long tableID, @RequestBody(required = false) long restaurantID){
    return true;
  }

}
