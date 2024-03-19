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
import { QuestionsComponent } from './questions.component/questions.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    GoogleMapsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    MatExpansionModule,
    FormsModule,
    MatCheckboxModule,
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
    QuestionsComponent,
  ],
  exports: [MapComponent],
})
export class PagesModule {}
