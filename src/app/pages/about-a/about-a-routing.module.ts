import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutAComponent } from './about-a.component';

const routes: Routes = [{ path: '', component: AboutAComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AboutARoutingModule {}
