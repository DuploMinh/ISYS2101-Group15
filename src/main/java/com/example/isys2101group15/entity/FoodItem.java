package com.example.isys2101group15.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@NoArgsConstructor
@AllArgsConstructor
public class FoodItem {


  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  @Column(name = "id", nullable = false)
  private Long id;
  @Getter
  @Setter
  private String name, category,description,price,imgPath;
  @Getter
  @Setter
  private boolean isNew,recommended,openSpot;
  @ManyToOne
  @Getter
  @Setter
  private Restaurant restaurant;

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

}
