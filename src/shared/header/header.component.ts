import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  menuItems = [
    { title: 'Főoldal', link: '/main' },
    { title: 'Kollégiumról', link: '/about-college' },
    { title: 'Hallgatóknak', link: '/for-students' },
    { title: 'B épület', link: '/about-b' },
    { title: 'Szolgáltatások', link: '/about-services' },
    { title: 'Galéria', link: '/galery' },
    { title: 'Kapcsolat', link: '/contact' },
  ];

  onLoginClick() {
    console.log('Bejelentkezés');
  }

  onRegisterClick() {
    console.log('Regisztráció');
  }

  ngOnInit() {}
}
