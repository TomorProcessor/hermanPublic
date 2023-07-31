import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared.module';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {}

@NgModule({
  declarations: [MainComponent],
  imports: [SharedModule],
})
export class MainModule {}
