package com.example.zingcollectspringboot.repository;

import com.example.zingcollectspringboot.model.Objet;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ObjetRepository extends JpaRepository<Objet, Integer> {
    // Vous pouvez ajouter des méthodes spécifiques si nécessaire
}
