package com.example.zingcollectspringboot.repository;

import com.example.zingcollectspringboot.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public class UserRepository extends JpaRepository<User, Integer> {
}
