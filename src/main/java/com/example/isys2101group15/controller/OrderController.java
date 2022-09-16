package com.example.isys2101group15.controller;
import com.example.isys2101group15.entity.FoodItem;
import com.example.isys2101group15.entity.OrderEntity;
import com.example.isys2101group15.repository.FoodItemRepository;
import com.example.isys2101group15.repository.OrderRepository;
import java.time.ZonedDateTime;
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
  public boolean makeOrder(
      @RequestBody List<Long> itemList,
      @RequestBody String requirement,
      @RequestBody String voucher,
      @RequestBody String address,
      @RequestBody Boolean spoon,
      @RequestBody Boolean ketchup,
      @RequestBody Boolean chiliSauce,
      @RequestBody Boolean silverPaper){
    List<FoodItem> foodItems = new ArrayList<>();
    for (Long id: itemList
    ) {
      Optional<FoodItem> food = foodRepo.findById(id);
        if (food.isEmpty()){
          return false;
        }
        foodItems.add(food.get());
    }
    OrderEntity o = new OrderEntity();
    o.setFoodItems(foodItems);
    o.setAddress(address);
    o.setRequirement(requirement);
    o.setVoucher(voucher);
    o.setSpoon(spoon);
    o.setKetchup(ketchup);
    o.setChiliSauce(chiliSauce);
    o.setSilverPaper(silverPaper);
    o.setOrderCreationTime(ZonedDateTime.now());
    orderRepo.save(o);
    return true;
  }
}
