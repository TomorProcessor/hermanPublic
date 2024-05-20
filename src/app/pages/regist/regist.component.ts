import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/shared/models/User';
import { AuthService } from 'src/shared/services/auth.service';
import { UserService } from 'src/shared/services/user.service';
import { DialogComponent } from 'src/shared/dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'regisztracio',
  templateUrl: './regist.component.html',
  styleUrls: ['./regist.component.scss'],
})
export class RegistComponent implements OnInit {
  hide = true;
  registForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    rePassword: new FormControl(''),
    neptun: new FormControl(''),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });

  constructor(
    private router: Router,
    private authService: AuthService,
    private userService: UserService,
    private dialog: MatDialog
  ) {}

  openDialog(message: string): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '300px',
      data: { message: message },
    });
  }

  ngOnInit() {}

  onSubmit() {
    const email = this.registForm.get('email')?.value;
    const password = this.registForm.get('password')?.value;
    const firstName = this.registForm.get('firstName')?.value;
    const lastName = this.registForm.get('lastName')?.value;
    const neptun = this.registForm.get('neptun')?.value;
    const rePassword = this.registForm.get('rePassword')?.value;
    const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (
      !email ||
      !firstName ||
      !lastName ||
      !neptun ||
      !password ||
      !rePassword
    ) {
      this.openDialog('Minden mező kitöltése kötelező!');
      return;
    } else if (password != rePassword) {
      this.openDialog('A két jelszó nem egyezik meg!');
      return;
    } else if (password.length < 8 || rePassword.length < 8) {
      this.openDialog('Legalább 8 karakter kell hogy legyen a jelszó!');
      return;
    } else if (!emailRegex.test(email)) {
      this.openDialog('Az email nem megfelelő formátumú!');
      return;
    } else {
      this.authService
        .signup(email, password)
        .then((cred) => {
          const user: User = {
            id: cred.user?.uid as string,
            email: email,
            neptun: neptun,
            firstName: firstName,
            lastName: lastName,
            isAdmin: false,
          };
          this.userService
            .create(user)
            .then((_) => {
              console.log('Sikeresen felhasználó létrehozva');
              this.authService.setUser(user);
              this.router.navigateByUrl('/login');
            })
            .catch((error) => {
              console.log(error);
            });
        })
        .catch((error) => {
          console.error('Hiba történt a regisztráció során:', error);
          this.openDialog('Hiba! A felhasználónév vagy az email cím foglalt!');
        });
    }
  }

  cancel() {
    this.router.navigateByUrl('/login');
  }
}
