import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { User } from '../models/User';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-headerForStudents',
  templateUrl: './headerForStudents.component.html',
  styleUrls: ['./headerForStudents.component.scss'],
})
export class HeaderForStudentsComponent implements OnInit {
  constructor(
    private router: Router,
    private authService: AuthService,
    private afAuth: AngularFireAuth,
    private userService: UserService
  ) {}

  currentUser: User | null = null;
  userEmail: string | null = null;

  ngOnInit() {
    this.afAuth.onAuthStateChanged((user) => {
      if (user) {
        const userId = user.uid;
        const userEmail = user.email;
        this.userService
          .isAdmin(userId)
          .then((userIsAdmin) => {
            this.currentUser = {
              id: userId,
              firstName: '',
              lastName: '',
              neptun: '',
              email: userEmail ?? '',
              isAdmin: userIsAdmin,
            };
          })
          .catch((error) => {
            console.error(
              'Hiba történt az adminisztrátori jogosultság ellenőrzésekor:',
              error
            );
          });
      } else {
        this.currentUser = null;
      }
    });
    this.authService.isUserLoggedIn().subscribe(
      (user) => {
        this.loggedInUser = user;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  loggedInUser?: firebase.default.User | null;

  logout() {
    this.authService.logout();
  }
}
