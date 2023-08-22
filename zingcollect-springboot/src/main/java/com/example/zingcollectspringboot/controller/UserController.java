package com.example.zingcollectspringboot.controller;

import com.example.zingcollectspringboot.model.User;
import com.example.zingcollectspringboot.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class UserController {
    @Autowired
    private UserService userService;

    @PostMapping("/user/add")
    public User addUser(@RequestBody User user) {
        return this.userService.save(user);
    }

    @GetMapping("/users/all")
    public List<User> getAllUsers(){
        return this.userService.getAll();
    }

    @GetMapping("/user/{idUser}")
    public  User userById(@PathVariable Integer idUser) {
        return this.userService.byId(idUser);
    }

    @DeleteMapping("/user/{idUser}")
    public void deleteUser(@PathVariable Integer idUser) {
        this.userService.deleteById(idUser);
    }
}
