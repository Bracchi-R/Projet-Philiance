package com.example.zingcollectspringboot.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "users")
public class User {
    @Id
    @Column(name = "id", nullable = false)
    private Integer id;

    @Column(name = "admin", nullable = false)
    private Boolean admin = false;

    @Column(name = "nom", nullable = false, length = 256)
    private String nom;

    @Column(name = "prenom", nullable = false, length = 256)
    private String prenom;

    @Column(name = "tel", length = 20)
    private String tel;

    @Column(name = "mail", nullable = false, length = 256)
    private String mail;

    @Column(name = "mdp", nullable = false, length = 256)
    private String mdp;

}