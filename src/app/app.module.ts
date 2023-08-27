import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutCollegeComponent } from './pages/about-college/about-college.component';
import { AboutBComponent } from './pages/about-b/about-b.component';
import { ForStudentsComponent } from './pages/for-students/for-students.component';
import { AboutServicesComponent } from './pages/about-services/about-services.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MainComponent } from './pages/main/main.component';
import { PagesModule } from './pages/pages.module';
import { SharedModule } from '../shared/shared.module';
import { AboutAComponent } from './pages/about-a/about-a.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

const routes: Routes = [
  { path: '', redirectTo: '/fooldal', pathMatch: 'full' },
  { path: 'fooldal', component: MainComponent },
  { path: 'kapcsolat', component: ContactComponent },
  { path: 'b-epulet', component: AboutBComponent },
  { path: 'a-epulet', component: AboutAComponent },
  { path: 'kollegiumrol', component: AboutCollegeComponent },
  { path: 'szolgaltatasok', component: AboutServicesComponent },
  { path: 'hallgatoknak', component: ForStudentsComponent },
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule,
    PagesModule,
    SharedModule,
    MatSlideToggleModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
