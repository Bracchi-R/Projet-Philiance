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

    /* Cette méthode permet de sauvegarder un objet Objet dans la base de données */
    public Objet save(Objet objet) {
        return this.objetRepository.save(objet);
    }

    /* Cette méthode permet de récupérer un objet Objet en fonction de son identifiant */
    public Objet byId(Integer id) {
        return this.objetRepository.findById(id).orElse(null);
    }

    /* Cette méthode permet de supprimer un objet Objet en fonction de son identifiant */
    public void deleteById(Integer id) {
        this.objetRepository.deleteById(id);
    }
}
