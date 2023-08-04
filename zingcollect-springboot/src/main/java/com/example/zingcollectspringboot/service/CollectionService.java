package com.example.zingcollectspringboot.service;

import com.example.zingcollectspringboot.model.Collection;
import com.example.zingcollectspringboot.repository.CollectionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CollectionService {

    @Autowired
    private CollectionRepository collectionRepository;

    /*cette méthode elle permet de récupérer l'ensemble des données qui ce trouve dans la base de donnée*/
    public List<Collection> getAll() {
        return this.collectionRepository.findAll();
    }
}
