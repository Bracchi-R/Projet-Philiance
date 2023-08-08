package com.example.zingcollectspringboot.controller;

import com.example.zingcollectspringboot.model.Objet;
import com.example.zingcollectspringboot.service.ObjetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ObjetControler {
    @Autowired
    private ObjetService objetService;

    @GetMapping("/objets/all")
    public List<Objet> getAllObjets() {
        return this.objetService.getAll();
    }
}
