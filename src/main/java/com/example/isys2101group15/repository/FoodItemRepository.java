package com.example.isys2101group15.repository;

import com.example.isys2101group15.entity.FoodItem;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.querydsl.QuerydslPredicateExecutor;

public interface FoodItemRepository extends JpaRepository<FoodItem, Long>,
    QuerydslPredicateExecutor<FoodItem> {
  Page<FoodItem> findAllByCategory(String category, Pageable pageable);
}