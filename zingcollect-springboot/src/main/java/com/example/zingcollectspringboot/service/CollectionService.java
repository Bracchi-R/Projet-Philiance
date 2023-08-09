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

    /* Cette méthode permet de sauvegarder un objet Collection dans la base de données */
    public Collection save(Collection collection) {
        return this.collectionRepository.save(collection);
    }

    /* Cette méthode permet de récupérer un objet Collection en fonction de son identifiant */
    public Collection byId(Integer id) {
        return this.collectionRepository.findById(id).orElse(null);
    }

    /* Cette méthode permet de supprimer un objet Collection en fonction de son identifiant */
    public void deleteById(Integer id) {
        this.collectionRepository.deleteById(id);
    }
}
