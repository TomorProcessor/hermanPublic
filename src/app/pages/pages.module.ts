import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/shared/shared.module';
import { AboutServicesComponent } from './about-services/about-services.component';
import { AboutBComponent } from './about-b/about-b.component';
import { AboutCollegeComponent } from './about-college/about-college.component';
import { AboutAComponent } from './about-a/about-a.component';
import { ContactComponent } from './contact/contact.component';
import { ForStudentsComponent } from './for-students/for-students.component';
import { MainComponent } from './main/main.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { MapComponent } from './map/map.component';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    GoogleMapsModule,
    HttpClientModule,
    HttpClientJsonpModule,
  ],
  declarations: [
    AboutServicesComponent,
    AboutBComponent,
    AboutCollegeComponent,
    AboutAComponent,
    ContactComponent,
    ForStudentsComponent,
    MainComponent,
    MapComponent,
  ],
  exports: [MapComponent],
})
export class PagesModule {}
