import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/services/userService/user.service';
import { User } from 'src/model/user';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css'],
})
export class InscriptionComponent implements OnInit {
  
  public userForm! : FormGroup;

  constructor(private userService: UserService, private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
      this.userForm = this.formBuilder.group({
    nom : this.formBuilder.control(""),
    prenom : this.formBuilder.control(""),
    tel : this.formBuilder.control(""),
    mail : this.formBuilder.control(""),
    mdp : this.formBuilder.control(""),
      })
  }
  
  ajouterUser(){
    let user : User = this.userForm.value;
    
    this.userService.addUser(user).subscribe({
      next: data =>{
        console.log(data);
      },
      error : err => {
        console.error(err);
      }
    })
  }
 
}
