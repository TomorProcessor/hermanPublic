import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/shared/services/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from 'src/shared/dialog/dialog.component';

@Component({
  selector: 'bejelentkezes',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  hide = true;
  email = new FormControl('');
  password = new FormControl('');

  constructor(
    private router: Router,
    private authService: AuthService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {}

  openDialog(message: string): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '300px',
      data: { message: message },
    });
  }

  async login() {
    if (!this.email.value || !this.password.value) {
      this.openDialog('Üres mező!');
      return;
    } else {
      this.authService
        .login(this.email.value, this.password.value)
        .then((cred) => {
          this.router.navigateByUrl('/news');
        })
        .catch((error) => {
          this.openDialog('Rossz email cím vagy jelszó!');
        });
    }
  }
}
