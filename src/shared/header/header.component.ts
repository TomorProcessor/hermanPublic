import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { RegistComponent } from '../regist/regist.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(public login: MatDialog) {}
  menuItems = [
    { title: 'Főoldal', link: '/fooldal' },
    { title: 'Kollégiumról', link: '/kollegiumrol' },
    { title: 'Hallgatóknak', link: '/hallgatoknak' },
    { title: 'A épület', link: '/a-epulet' },
    { title: 'B épület', link: '/b-epulet' },
    { title: 'Szolgáltatások', link: '/szolgaltatasok' },
    { title: 'Gyakori kérdések', link: '/gyakorikerdesek' },
    { title: 'Kapcsolat', link: '/kapcsolat' },
  ];

  openLogin() {
    this.login.open(LoginComponent, {
      width: '30%',
      height: '50%',
      data: 'right click',
    });
  }

  openRegist() {
    this.login.open(RegistComponent, {
      width: '40%',
      height: '94%',
      data: 'right click',
    });
  }

  ngOnInit() {}
}
