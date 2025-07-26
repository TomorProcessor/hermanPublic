import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  menuItems = [
    { title: 'Főoldal', link: '/' },
    { title: 'Kollégiumról', link: '/about-college' },
    { title: 'Szabályzat', link: '/for-students' },
    { title: 'A épület', link: '/about-a' },
    { title: 'B épület', link: '/about-b' },
    { title: 'Szolgáltatások', link: '/about-services' },
    { title: 'Gyakori kérdések', link: '/questions' },
    // { title: 'Vendégkönyv', link: '/guest' }, // TODO: Re-enable later
    { title: 'Kapcsolat', link: '/contact' },
  ];

  constructor(private router: Router) {}

  ngOnInit() {}
}
