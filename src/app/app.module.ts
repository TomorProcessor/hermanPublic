import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { AboutCollegeComponent } from './about-college/about-college.component';
import { AboutBComponent } from './about-b/about-b.component';
import { ForStudentsComponent } from './for-students/for-students.component';
import { AboutServicesComponent } from './about-services/about-services.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { HeaderComponent } from 'src/shared/header/header.component';
import { FooterComponent } from 'src/shared/footer/footer.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  { path: '', redirectTo: '/app-root', pathMatch: 'full' },
  { path: 'main', component: MainComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about-b', component: AboutBComponent },
  { path: 'about-college', component: AboutCollegeComponent },
  { path: 'about-services', component: AboutServicesComponent },
  { path: 'for-students', component: ForStudentsComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    AboutBComponent,
    AboutCollegeComponent,
    ForStudentsComponent,
    AboutServicesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
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
