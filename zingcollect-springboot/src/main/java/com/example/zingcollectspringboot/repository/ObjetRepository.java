package com.example.zingcollectspringboot.repository;

import com.example.zingcollectspringboot.model.Objet;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ObjetRepository extends JpaRepository<Objet, Integer> {
    List<Objet> findByCollectionId(Integer collectionId);
}
