import { Component } from '@angular/core';

@Component({
  selector: 'app-about-b',
  templateUrl: './about-b.component.html',
  styleUrls: ['./about-b.component.scss'],
})
export class AboutBComponent {
  firstSlideshowImages = [
    'assets/bszoba1.jpg',
    'assets/bszoba2.jpg',
    'assets/bszoba3.jpg',
    'assets/bszoba4.jpg',
    'assets/bfolyoso1.jpg',
    'assets/bfolyoso2.jpg',
    'assets/bkonyha1.jpg',
    'assets/bkonyha2.jpg',
  ];
  secondSlideshowImages = [
    'assets/btarsalgo.jpg',
    'assets/bepulet.jpg',
    'assets/budvar.jpg',
  ];
}
