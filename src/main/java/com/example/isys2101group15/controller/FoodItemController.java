package com.example.isys2101group15.controller;

import com.example.isys2101group15.entity.FoodItem;
import com.example.isys2101group15.repository.FoodItemRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/food")
public class FoodItemController {
  private final FoodItemRepository repository;

  @GetMapping
  Page<FoodItem> getAll(Pageable pageable){
    return repository.findAll(pageable);
  }
  @GetMapping("/category/{category}")
  Page<FoodItem> getByCategory(Pageable pageable, @PathVariable String category){
    return repository.findAllByCategory(category,pageable);
  }


}