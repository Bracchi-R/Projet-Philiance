package com.example.zingcollectspringboot.controller;

import com.example.zingcollectspringboot.model.Objet;
import com.example.zingcollectspringboot.service.ObjetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class ObjetControler {
    @Autowired
    private ObjetService objetService;

    @PostMapping("/objet/add")
    public Objet addObjet(@RequestBody Objet objet) {
        return this.objetService.save(objet);
    }

    @GetMapping("/objets/all")
    public List<Objet> getAllObjets() {
        return this.objetService.getAll();
    }

    @GetMapping("/objet/{idObjet}")
    public Objet objetById(@PathVariable Integer idObjet) {
        return this.objetService.byId(idObjet);
    }

    @DeleteMapping("/objet/{idObjet}")
    public void deleteObjet(@PathVariable Integer idObjet) {
        this.objetService.deleteById(idObjet);
    }
}