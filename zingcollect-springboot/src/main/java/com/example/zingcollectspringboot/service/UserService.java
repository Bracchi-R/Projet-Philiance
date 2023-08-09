package com.example.zingcollectspringboot.service;

import com.example.zingcollectspringboot.model.User;
import com.example.zingcollectspringboot.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    /*cette méthode elle permet de récupérer l'ensemble des données qui ce trouve dans la base de donnée*/
    public List<User> getAll() {
        return this.userRepository.findAll();
    }

    /* Cette méthode permet de sauvegarder un objet User dans la base de données */
    public User save(User user) {
        return this.userRepository.save(user);
    }

    /* Cette méthode permet de récupérer un objet User en fonction de son identifiant */
    public User byId(Integer id) {
        return this.userRepository.findById(id).orElse(null);
    }

    /* Cette méthode permet de supprimer un objet User en fonction de son identifiant */
    public void deleteById(Integer id) {
        this.userRepository.deleteById(id);
    }
}
