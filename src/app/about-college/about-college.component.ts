import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared.module';

@Component({
  selector: 'app-about-college',
  templateUrl: './about-college.component.html',
  styleUrls: ['./about-college.component.css'],
})
export class AboutCollegeComponent {}

@NgModule({
  declarations: [AboutCollegeComponent],
  imports: [SharedModule],
})
export class MainModule {}
