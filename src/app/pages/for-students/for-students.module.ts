import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForStudentsRoutingModule } from './for-students-routing.module';
import { ForStudentsComponent } from './for-students.component';
import { SharedModule } from 'src/shared/shared.module';

@NgModule({
  declarations: [ForStudentsComponent],
  imports: [CommonModule, ForStudentsRoutingModule, SharedModule],
})
export class ForStudentsModule {}
