import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ContactComponent {
  mapOptions: google.maps.MapOptions = {
    center: { lat: 46.24903287306892, lng: 20.17051056126929 },
    zoom: 15,
  };
  marker1 = {
    position: { lat: 46.24745561427718, lng: 20.166015548358576 },
  };

  marker2 = {
    position: { lat: 46.25096389550297, lng: 20.174833179717417 },
  };
}
