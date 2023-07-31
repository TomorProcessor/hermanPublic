import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared.module';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {}

@NgModule({
  declarations: [ContactComponent],
  imports: [SharedModule],
})
export class MainModule {}
