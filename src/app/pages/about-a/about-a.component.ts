import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-a',
  templateUrl: './about-a.component.html',
  styleUrls: ['./about-a.component.scss'],
})
export class AboutAComponent implements OnInit {
  constructor() {}
  firstSlideshowImages = [
    'assets/szoba1.jpg',
    'assets/szoba2.jpg',
    'assets/szoba3.jpg',
    'assets/folyoso1.jpg',
    'assets/folyoso2.jpg',
    'assets/folyoso3.jpg',
    'assets/folyoso4.jpg',
    'assets/folyoso5.jpg',
    'assets/folyoso6.jpg',
    'assets/furdo1.jpg',
    'assets/furdo2.jpg',
    'assets/furdo3.jpg',
    'assets/konyha.jpg',
  ];
  secondSlideshowImages = ['assets/sportpalya1.jpg', 'assets/sportpalya2.jpg'];
  ngOnInit() {}
}
