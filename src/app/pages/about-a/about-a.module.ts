import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutARoutingModule } from './about-a-routing.module';
import { AboutAComponent } from './about-a.component';
import { SharedModule } from 'src/shared/shared.module';

@NgModule({
  declarations: [AboutAComponent],
  imports: [CommonModule, AboutARoutingModule, SharedModule],
})
export class AboutAModule {}
