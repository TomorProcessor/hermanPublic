import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared.module';

@Component({
  selector: 'app-about-b',
  templateUrl: './about-b.component.html',
  styleUrls: ['./about-b.component.css'],
})
export class AboutBComponent {}

@NgModule({
  declarations: [AboutBComponent],
  imports: [SharedModule],
})
export class MainModule {}
