package com.example.zingcollectspringboot.repository;

import com.example.zingcollectspringboot.model.Objet;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public class ObjetRepository extends JpaRepository<Objet, Integer> {
}
