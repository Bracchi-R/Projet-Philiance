package com.example.zingcollectspringboot.repository;

import com.example.zingcollectspringboot.model.Etat;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EtatRepository extends JpaRepository<Etat, Integer> {
}
