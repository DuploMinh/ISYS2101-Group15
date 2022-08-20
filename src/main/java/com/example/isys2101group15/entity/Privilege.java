package com.example.isys2101group15.entity;

import java.util.Collection;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import lombok.Getter;
import lombok.Setter;

@Entity
public class Privilege {

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  @Column(name = "id", nullable = false)
  private Long id;
  @Setter
  @Getter
  private String name;
  @ManyToMany(mappedBy = "privileges")
  private Collection<Role> roles;

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }
}
