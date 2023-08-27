import { Component } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css'],
})
export class SlideshowComponent {
  images = [
    'assets/szoba1.jpg',
    'assets/szoba2.jpg',
    'assets/szoba3.jpg',
    'assets/szoba4.jpg',
    'assets/szoba5.jpg',
  ];
}
