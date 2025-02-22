import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutBComponent } from './about-b.component';

const routes: Routes = [{ path: '', component: AboutBComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AboutBRoutingModule {}
