package com.example.zingcollectspringboot.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "objets")
public class Objet {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Integer id;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "id_collection", nullable = false)
    private Collection idCollection;

    @Column(name = "image", nullable = false, length = 256)
    private String image;

    @Column(name = "marque", length = 256)
    private String marque;

    @Lob
    @Column(name = "etat", nullable = false)
    private String etat;

    @Lob
    @Column(name = "description")
    private String description;

    @Column(name = "prix_vente")
    private Integer prixVente;

}