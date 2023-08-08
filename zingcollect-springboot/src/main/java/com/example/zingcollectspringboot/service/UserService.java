package com.example.zingcollectspringboot.service;

import com.example.zingcollectspringboot.model.User;
import com.example.zingcollectspringboot.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public List<User> getAll(){
        return this.userRepository.findAll();
    }
}
