package com.example.isys2101group15.utils;

import com.example.isys2101group15.config.SecurityConfigurations;
import com.example.isys2101group15.entity.FoodItem;
import com.example.isys2101group15.entity.Privilege;
import com.example.isys2101group15.entity.Role;
import com.example.isys2101group15.entity.UserEntity;
import com.example.isys2101group15.repository.FoodItemRepository;
import com.example.isys2101group15.repository.PrivilegesRepository;
import com.example.isys2101group15.repository.RolesRepository;
import com.example.isys2101group15.repository.UserEntityRepository;
import java.util.Arrays;
import java.util.Collection;
import java.util.List;
import javax.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationListener;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class SetupDataLoader implements ApplicationListener<ContextRefreshedEvent> {

  boolean alreadySetup = false;

  private final UserEntityRepository userRepository;
  private final PrivilegesRepository privilegeRepository;
  private final RolesRepository roleRepository;
  private final FoodItemRepository foodItemRepository;

  @Override
  @Transactional
  public void onApplicationEvent(ContextRefreshedEvent event) {
    if (alreadySetup)
      return;
    Privilege readPrivilege
        = createPrivilegeIfNotFound("READ_PRIVILEGE");
    Privilege writePrivilege
        = createPrivilegeIfNotFound("WRITE_PRIVILEGE");

    List<Privilege> adminPrivileges = Arrays.asList(
        readPrivilege, writePrivilege);
    createRoleIfNotFound("ROLE_ADMIN", adminPrivileges);
    createRoleIfNotFound("ROLE_USER", Arrays.asList(readPrivilege));

    Role adminRole = roleRepository.findByName("ROLE_ADMIN");
    UserEntity user = new UserEntity();
    user.setFirstName("Test");
    user.setLastName("Test");
    user.setPassword("test");
    user.setUserName("test@test.com");
    user.setRoles(Arrays.asList(adminRole));
    user.setEnabled(true);
    userRepository.save(user);
    FoodItem f1 = new FoodItem();
    f1.setName("test food");
    f1.setCategory("dessert");
    f1.setDescription("test food item");
    f1.setPrice("123456");
    FoodItem f2 = new FoodItem();
    f2.setName("test food 2");
    f2.setCategory("dessert");
    f2.setDescription("test food item 2");
    f2.setPrice("123456");
    foodItemRepository.save(f1);
    foodItemRepository.save(f2);
    alreadySetup = true;
  }

  @Transactional
  Privilege createPrivilegeIfNotFound(String name) {

    Privilege privilege = privilegeRepository.findByName(name);
    if (privilege == null) {
      privilege = new Privilege(name);
      privilegeRepository.save(privilege);
    }
    return privilege;
  }

  @Transactional
  Role createRoleIfNotFound(
      String name, Collection<Privilege> privileges) {

    Role role = roleRepository.findByName(name);
    if (role == null) {
      role = new Role(name);
      role.setPrivileges(privileges);
      roleRepository.save(role);
    }
    return role;
  }
}
