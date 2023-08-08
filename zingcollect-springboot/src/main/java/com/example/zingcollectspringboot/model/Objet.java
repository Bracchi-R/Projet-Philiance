package com.example.zingcollectspringboot.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;

@Getter
@Setter
@Entity
@Table(name = "objets")
public class Objet {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Integer id;

    @Column(name = "collection_id")
    private Integer collectionId;

    @Column(name = "nom", nullable = false, length = 256)
    private String nom;

    @Column(name = "image", nullable = false, length = 256)
    private String image;

    @Column(name = "marque", length = 256)
    private String marque;

    @Lob
    @Column(name = "etat")
    private String etat;

    @Lob
    @Column(name = "description")
    private String description;

    @Column(name = "prix_vente", precision = 10, scale = 2)
    private BigDecimal prixVente;

}