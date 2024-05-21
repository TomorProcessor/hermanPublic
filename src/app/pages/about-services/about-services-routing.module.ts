import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutServicesComponent } from './about-services.component';

const routes: Routes = [{ path: '', component: AboutServicesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AboutServicesRoutingModule {}
