package com.example.isys2101group15.model;


import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Setter
@Getter
public class ReservationModel {
  private String name, email, phoneNumber;
  private int time;
  private long tableID, restaurantID;
}
