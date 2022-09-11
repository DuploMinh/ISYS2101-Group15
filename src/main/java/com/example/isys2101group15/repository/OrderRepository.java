package com.example.isys2101group15.repository;

import com.example.isys2101group15.entity.orderEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository extends JpaRepository<orderEntity, Long> {

}