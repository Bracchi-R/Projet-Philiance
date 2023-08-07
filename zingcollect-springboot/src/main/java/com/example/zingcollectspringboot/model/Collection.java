package com.example.zingcollectspringboot.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.LinkedHashSet;
import java.util.Set;

@Getter
@Setter
@Entity
@Table(name = "collection")
public class Collection {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Integer id;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "id_user", nullable = false)
    private User idUser;

    @Column(name = "nom", nullable = false, length = 256)
    private String nom;

    @Column(name = "image", nullable = false, length = 256)
    private String image;

    @Lob
    @Column(name = "description")
    private String description;

    @OneToMany(mappedBy = "idCollection")
    private Set<Objet> objets = new LinkedHashSet<>();

}