package com.example.isys2101group15.controller;

import com.example.isys2101group15.model.ReservationModel;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/booking")
@CrossOrigin
public class BookingController {

  @PostMapping("/makeBooking")
  public boolean makeBooking(@ModelAttribute ReservationModel reservationModel){
    return true;
  }


}
