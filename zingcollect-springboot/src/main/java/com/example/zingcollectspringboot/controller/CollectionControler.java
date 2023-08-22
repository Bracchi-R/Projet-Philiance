package com.example.zingcollectspringboot.controller;

import com.example.zingcollectspringboot.model.Collection;
import com.example.zingcollectspringboot.service.CollectionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class CollectionControler {
    @Autowired
    private CollectionService collectionService;

    @PostMapping("collection/add")
    public Collection addCollection(@RequestBody Collection collection) {
        return this.collectionService.save(collection);
    }

    @GetMapping("/collections/all")
    public List<Collection> getAllCollections() {
        return this.collectionService.getAll();
    }

    @GetMapping("/collection/{idCollection}")
    public Collection collection(@PathVariable Integer idCollection){
        return this.collectionService.byId(idCollection);
    }

    @DeleteMapping("/collection/{idCollection}")
        public void deleteCollection(@PathVariable Integer idCollection){
        this.collectionService.deleteById((idCollection));
    }



}
