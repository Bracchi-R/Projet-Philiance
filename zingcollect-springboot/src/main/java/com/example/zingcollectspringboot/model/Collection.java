package com.example.zingcollectspringboot.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "collection")
public class Collection {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Integer id;

    @Column(name = "user_id")
    private Integer userId;

    @Column(name = "nom", nullable = false, length = 256)
    private String nom;

    @Column(name = "image", length = 256)
    private String image;

    @Lob
    @Column(name = "description")
    private String description;

}