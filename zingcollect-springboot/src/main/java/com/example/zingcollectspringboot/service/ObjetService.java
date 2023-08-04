package com.example.zingcollectspringboot.service;

import com.example.zingcollectspringboot.model.Objet;
import com.example.zingcollectspringboot.repository.ObjetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ObjetService {
    @Autowired
    private ObjetRepository objetRepository;

    /*cette méthode elle permet de récupérer l'ensemble des données qui ce trouve dans la base de donnée*/
    public List<Objet> getAll() {
        return this.objetRepository.findAll();
    }
}
