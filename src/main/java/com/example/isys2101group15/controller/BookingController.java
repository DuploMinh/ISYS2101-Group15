package com.example.isys2101group15.controller;

import com.example.isys2101group15.entity.Reservation;
import com.example.isys2101group15.entity.RestaurantTable;
import com.example.isys2101group15.model.ReservationModel;
import com.example.isys2101group15.repository.ReservationRepository;
import com.example.isys2101group15.repository.RestaurantTableRepository;
import java.util.Optional;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/booking")
@CrossOrigin
@RequiredArgsConstructor
public class BookingController {
private final ReservationRepository reservationRepository;
//private final RestaurantRepository restaurantRepository;
private final RestaurantTableRepository restaurantTableRepository;
  @PostMapping("/makeBooking")
  public boolean makeBooking(@ModelAttribute ReservationModel reservationModel){
    Optional<RestaurantTable> restaurantTable = Optional.ofNullable(
        restaurantTableRepository.findByTableName(
            String.valueOf(reservationModel.getTableID())));
    if (restaurantTable.isEmpty()){
      return false;
    }
    if(
        reservationRepository.findAllByRestaurantTableAndTimeSlot(restaurantTable.get(), String.valueOf(reservationModel.getTime())) == null){
      Reservation r = new Reservation();
      r.setRestaurant(restaurantTable.get().getRestaurant());
      r.setRestaurantTable(restaurantTable.get());
      r.setTimeSlot(String.valueOf(reservationModel.getTime()));
      reservationRepository.save(r);
      return true;
    }
    return false;
  }


}
