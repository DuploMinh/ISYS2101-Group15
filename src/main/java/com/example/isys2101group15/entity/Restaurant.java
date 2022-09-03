package com.example.isys2101group15.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import org.springframework.data.geo.Point;
import org.springframework.web.bind.annotation.RequestMapping;

@Entity
@Table(name = "restaurant")
@Setter
@Getter
@RequiredArgsConstructor
public class Restaurant {

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  @Column(name = "id", nullable = false)
  @Setter(AccessLevel.PRIVATE)
  @Getter
  private Long id;
  private String name;
  private String address;
  @Column(columnDefinition = "point")
  private Point coordinate;


}