import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutServicesRoutingModule } from './about-services-routing.module';
import { AboutServicesComponent } from './about-services.component';
import { SharedModule } from 'src/shared/shared.module';

@NgModule({
  declarations: [AboutServicesComponent],
  imports: [CommonModule, AboutServicesRoutingModule, SharedModule],
})
export class AboutServicesModule {}
