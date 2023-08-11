package com.example.zingcollectspringboot.service;

import com.example.zingcollectspringboot.model.Etat;
import com.example.zingcollectspringboot.repository.EtatRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EtatService {

    @Autowired
    private EtatRepository etatRepository;

    public List<Etat> getAll() {
        return this.etatRepository.findAll();
    }

    public Etat save(Etat etat) {
        return this.etatRepository.save(etat);
    }

    public Etat byId(Integer id) {
        return  this.etatRepository.findById(id).orElse(null);
    }

    public  void deleteById(Integer id) {
        this.etatRepository.deleteById(id);
    }
}
