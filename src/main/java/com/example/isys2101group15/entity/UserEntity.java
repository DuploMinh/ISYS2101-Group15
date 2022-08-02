package com.example.isys2101group15.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;


@Entity
public class UserEntity {
  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  @Column(name = "id", nullable = false)
  private Long id;
  @Column(nullable = false,unique = true)
  private String userName;
  private String password;
  private String email;
  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }
}
