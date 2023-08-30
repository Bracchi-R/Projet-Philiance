import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UserService } from 'src/app/services/userService/user.service';
import { User } from 'src/model/user';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css'],
})
export class InscriptionComponent {
  newUser: User = {
    id: 0,
    admin: false,
    nom: '',
    prenom: '',
    tel: null,
    mail: '',
    mdp: '',
  };

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder
  ) {}

  addUser() {
    this.userService.addUser(this.newUser).subscribe(
      (response) => {
        console.log('Utilisateur ajouté avec succès :', response);
        this.newUser = {
          id: 0,
          admin: false,
          nom: '',
          prenom: '',
          tel: null,
          mail: '',
          mdp: '',
        };
      },
      (error) => {
        console.error("Erreur lors de l'ajout de l'utilisateur :", error);
      }
    );
  }
}
