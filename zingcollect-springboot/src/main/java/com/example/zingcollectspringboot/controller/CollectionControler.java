package com.example.zingcollectspringboot.controller;

import com.example.zingcollectspringboot.model.Collection;
import com.example.zingcollectspringboot.service.CollectionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class CollectionControler {
    @Autowired
    private CollectionService collectionService;

    @GetMapping("/collections/all")
    public List<Collection> getAllCollections() {
        return this.collectionService.getAll();
    }
}
