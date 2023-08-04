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

    /*cette méthode elle permet de récupérer l'ensemble des données qui ce trouve dans la base de donnée*/
    public List<User> getAll() {
        return this.userRepository.findAll();
    }
}
