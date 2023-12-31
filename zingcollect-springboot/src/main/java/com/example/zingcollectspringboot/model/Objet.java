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

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "collection_id")
    private Collection collection;

    @Column(name = "nom", nullable = false, length = 256)
    private String nom;

    @Column(name = "image", nullable = false, length = 256)
    private String image;

    @Column(name = "marque", length = 256)
    private String marque;

    @Lob
    @Column(name = "description")
    private String description;

    @Column(name = "prix_vente", precision = 10, scale = 2)
    private BigDecimal prixVente;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "etat_id")
    private Etat etat;

}