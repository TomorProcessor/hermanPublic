import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared.module';

@Component({
  selector: 'app-for-students',
  templateUrl: './for-students.component.html',
  styleUrls: ['./for-students.component.css'],
})
export class ForStudentsComponent {}

@NgModule({
  declarations: [ForStudentsComponent],
  imports: [SharedModule],
})
export class MainModule {}
