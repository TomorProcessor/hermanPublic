import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-a',
  templateUrl: './about-a.component.html',
  styleUrls: ['./about-a.component.css'],
})
export class AboutAComponent implements OnInit {
  constructor() {}
  firstSlideshowImages = [
    'assets/szoba1.jpg',
    'assets/szoba2.jpg',
    'assets/szoba3.jpg',
  ];
  secondSlideshowImages = [
    'assets/kep1.jpg',
    'assets/kep2.jpg',
    'assets/kep3.jpg',
  ];
  ngOnInit() {}
}
