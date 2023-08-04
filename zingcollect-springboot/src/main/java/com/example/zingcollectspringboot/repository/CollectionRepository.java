package com.example.zingcollectspringboot.repository;

import com.example.zingcollectspringboot.model.Collection;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public class CollectionRepository extends JpaRepository<Collection, Integer> {
}
