import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/userService/user.service';
import { User } from 'src/model/user';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getAllUser().subscribe((users) => {
      this.users = users;
    });
  }

  loadUsers(): void {
    this.userService.getAllUser().subscribe((users) => {
      this.users = users;
    });
  }

  deleteUser(userId: number): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer cet utilisateur ?')) {
      this.userService.deleteUser(userId).subscribe(() => {
        // Mettez à jour la liste des utilisateurs après la suppression
        this.loadUsers();
      });
    }
  }
}
