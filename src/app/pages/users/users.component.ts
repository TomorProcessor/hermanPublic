import { Component, OnInit } from '@angular/core';
import { User } from 'src/shared/models/User';
import { UserService } from 'src/shared/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getAll().subscribe((users) => {
      this.users = users;
    });
  }

  setUserAdmin(userId: string): void {
    if (confirm('Biztosan adminná szeretnéd tenni ezt a felhasználót?')) {
      this.userService
        .setUserAdmin(userId)
        .then(() => {
          console.log('Felhasználó sikeresen adminná tettve.');
        })
        .catch((error) => {
          console.error(
            'Hiba történt a felhasználó adminná tétel közben:',
            error
          );
        });
    }
  }
}
