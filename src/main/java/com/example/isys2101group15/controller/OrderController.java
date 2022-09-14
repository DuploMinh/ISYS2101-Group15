package com.example.isys2101group15.controller;
import com.example.isys2101group15.entity.FoodItem;
import com.example.isys2101group15.entity.OrderEntity;
import com.example.isys2101group15.repository.FoodItemRepository;
import com.example.isys2101group15.repository.OrderRepository;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.Set;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/order")
@CrossOrigin
@RequiredArgsConstructor
public class OrderController {
 private final FoodItemRepository foodRepo;
 private final OrderRepository orderRepo;
  @GetMapping("/cart")
  public String cart(){
    return "cart";
  }
  @PostMapping("/cart")
  public boolean makeOrder(@RequestBody List<Long> ids){
    List<FoodItem> foodItems = new ArrayList<>();
    for (Long id: ids
    ) {
      Optional<FoodItem> food = foodRepo.findById(id);
        if (food.isEmpty()){
          return false;
        }
        foodItems.add(food.get());
    }
    OrderEntity o = new OrderEntity();
    o.setFoodItems(foodItems);
    orderRepo.save(o);
    return true;
  }
}
