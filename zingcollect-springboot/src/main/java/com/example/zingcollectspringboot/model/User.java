package com.example.zingcollectspringboot.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.LinkedHashSet;
import java.util.Set;

@Getter
@Setter
@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Integer id;

    @Column(name = "admin", nullable = false)
    private Boolean admin = false;

    @Column(name = "nom", nullable = false, length = 256)
    private String nom;

    @Column(name = "prenom", nullable = false, length = 256)
    private String prenom;

    @Column(name = "tel", length = 10)
    private String tel;

    @Column(name = "mail", nullable = false)
    private String mail;

    @Column(name = "mdp", nullable = false, length = 20)
    private String mdp;

    @OneToMany(mappedBy = "idUser")
    private Set<Collection> collections = new LinkedHashSet<>();

}