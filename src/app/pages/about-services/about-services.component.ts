import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-services',
  templateUrl: './about-services.component.html',
  styleUrls: ['./about-services.component.css'],
})
export class AboutServicesComponent {
  firstSlideshowImages = [
    'assets/haloszobalakas1.jpg',
    'assets/haloszobalakas2.jpg',
    'assets/haloszobalakas3.jpg',
    'assets/haloszobalakas4.jpg',
  ];
  secondSlideshowImages = [
    'assets/lakas1.jpg',
    'assets/lakas2.jpg',
    'assets/lakas3.jpg',
    'assets/lakas4.jpg',
    'assets/lakas5.jpg',
  ];
}
