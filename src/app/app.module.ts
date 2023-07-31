import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Route, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { MainComponent } from './main/main.component';
import { SharedModule } from './shared.module';
import { AboutCollegeComponent } from './about-college/about-college.component';
import { AboutBComponent } from './about-b/about-b.component';
import { ForStudentsComponent } from './for-students/for-students.component';
import { AboutServicesComponent } from './about-services/about-services.component';
import { GaleryComponent } from './galery/galery.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'main', component: MainComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about-b', component: AboutBComponent },
  { path: 'about-college', component: AboutCollegeComponent },
  { path: 'about-services', component: AboutServicesComponent },
  { path: 'for-students', component: ForStudentsComponent },
  { path: 'galery', component: GaleryComponent },
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    SharedModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
