package com.example.isys2101group15.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "restaurant_table")
public class RestaurantTable {

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  @Column(name = "id", nullable = false)
  private Long id;

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  @Setter
  @Getter
  @ManyToOne
  @JoinColumn(name = "restaurant_id")
  private Restaurant restaurant;
  @Setter
  @Getter
  private int floor;
  @Setter
  @Getter
  private double x, y;
  @Setter
  @Getter
  private String tableName;
}