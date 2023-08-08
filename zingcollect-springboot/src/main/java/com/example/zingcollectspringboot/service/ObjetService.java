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

    public List<Objet> getAll() {
        return this.objetRepository.findAll();
    }
}
