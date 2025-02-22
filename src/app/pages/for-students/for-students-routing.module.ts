import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForStudentsComponent } from './for-students.component';

const routes: Routes = [{ path: '', component: ForStudentsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ForStudentsRoutingModule {}
