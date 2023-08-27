import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { GoogleMap } from '@angular/google-maps';
import { style } from '@angular/animations';

interface MarkerProperties {
  options: google.maps.MarkerOptions;

  position: {
    lat: number;
    lng: number;
  };
}

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {
  apiLoaded: Observable<boolean>;

  @ViewChild('myGoogleMap', { static: true }) map!: GoogleMap;

  constructor(httpClient: HttpClient) {
    this.apiLoaded = httpClient
      .jsonp(
        'https://maps.googleapis.com/maps/api/js?key=AIzaSyC_tIgMry4DMpEd77cB5PO0cGsIEp9QbNU',
        'callback'
      )
      .pipe(
        map(() => true),
        catchError(() => of(false))
      );
  }

  commonMarkerOption: google.maps.MarkerOptions = {
    draggable: false,
  };

  markers: MarkerProperties[] = [
    {
      options: {
        ...this.commonMarkerOption,
        label: {
          text: '"A" épület',
          color: 'black',
          fontSize: '16px',
          fontWeight: 'bold',
        },
        visible: true,
      },
      position: { lat: 46.247664707197835, lng: 20.16611715658001 },
    },
    {
      options: {
        ...this.commonMarkerOption,
        label: {
          text: '"B" épület',
          color: 'black',
          fontSize: '16px',
          fontWeight: 'bold',
        },
      },
      position: { lat: 46.25107401790987, lng: 20.174801020226933 },
    },
  ];

  options: google.maps.MapOptions = {
    center: { lat: 46.24903287306892, lng: 20.17051056126929 },
    zoom: 15,
    gestureHandling: 'cooperative',
  };

  ngOnInit() {}
}
