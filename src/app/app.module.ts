import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { SharedModule } from './shared.module';
import { MainComponent } from './main/main.component';
import { AboutCollegeComponent } from './about-college/about-college.component';
import { AboutBComponent } from './about-b/about-b.component';
import { ForStudentsComponent } from './for-students/for-students.component';
import { AboutServicesComponent } from './about-services/about-services.component';
import { GaleryComponent } from './galery/galery.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';

const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
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
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
