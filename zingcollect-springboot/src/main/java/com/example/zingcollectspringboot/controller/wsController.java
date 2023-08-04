package com.example.zingcollectspringboot.controller;

import com.example.zingcollectspringboot.service.CollectionService;
import com.example.zingcollectspringboot.service.ObjetService;
import com.example.zingcollectspringboot.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class wsController {
    @Autowired
    private UserService userService;

    @Autowired
    private CollectionService collectionService;

    @Autowired
    private ObjetService objetService;
}
