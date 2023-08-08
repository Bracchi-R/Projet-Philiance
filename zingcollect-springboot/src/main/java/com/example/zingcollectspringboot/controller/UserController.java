package com.example.zingcollectspringboot.controller;

import com.example.zingcollectspringboot.model.User;
import com.example.zingcollectspringboot.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class UserController {
    @Autowired
    private UserService userService;

    @GetMapping("/users/all")
    public List<User> getAllUsers(){
        return this.userService.getAll();
    }
}
