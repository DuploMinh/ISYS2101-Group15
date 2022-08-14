package com.example.isys2101group15.repository;

import com.example.isys2101group15.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

@Repository
public interface UserEntityRepository extends JpaRepository<UserEntity, Long>,
    JpaSpecificationExecutor<UserEntity> {
  UserEntity findByUserName(String username);
}