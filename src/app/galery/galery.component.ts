import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared.module';

@Component({
  selector: 'app-galery',
  templateUrl: './galery.component.html',
  styleUrls: ['./galery.component.css'],
})
export class GaleryComponent {}

@NgModule({
  declarations: [GaleryComponent],
  imports: [SharedModule],
})
export class MainModule {}
