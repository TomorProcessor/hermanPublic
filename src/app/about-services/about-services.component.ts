import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared.module';

@Component({
  selector: 'app-about-services',
  templateUrl: './about-services.component.html',
  styleUrls: ['./about-services.component.css'],
})
export class AboutServicesComponent {}

@NgModule({
  declarations: [AboutServicesComponent],
  imports: [SharedModule],
})
export class MainModule {}
