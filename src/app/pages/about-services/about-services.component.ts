import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-services',
  templateUrl: './about-services.component.html',
  styleUrls: ['./about-services.component.scss'],
})
export class AboutServicesComponent {
  firstSlideshowImages = [
    'assets/haloszobalakas1.png',
    'assets/haloszobalakas2.jpg',
    'assets/haloszobalakas3.jpg',
    'assets/haloszobalakas4.jpg',
  ];
  secondSlideshowImages = [
    'assets/lakas1.jpg',
    'assets/lakas2.png',
    'assets/lakas3.jpg',
    'assets/lakas4.png',
    'assets/lakas5.jpg',
  ];
}
