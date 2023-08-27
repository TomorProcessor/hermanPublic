import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { RegistComponent } from '../regist/regist.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  hide = true;
  tilte = 'login';
  login: any;

  constructor() {}

  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessageEmail() {
    if (this.email.hasError('required')) {
      return 'Kötelező kitöltés!';
    }

    return this.email.hasError('email') ? 'Nem megfelelő email cím!' : '';
  }

  password = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessagePassword() {
    if (this.password.hasError('required')) {
      return 'Kötelező kitöltés!';
    }

    return this.password.hasError('password') ? 'Helytelen jelszó!' : '';
  }

  openRegist() {
    this.login.open(RegistComponent, {
      width: '40%',
      height: '90%',
      data: 'right click',
    });
  }

  ngOnInit() {}
}
