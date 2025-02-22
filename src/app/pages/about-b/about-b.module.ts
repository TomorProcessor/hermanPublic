import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutBRoutingModule } from './about-b-routing.module';
import { AboutBComponent } from './about-b.component';
import { SharedModule } from 'src/shared/shared.module';

@NgModule({
  declarations: [AboutBComponent],
  imports: [CommonModule, AboutBRoutingModule, SharedModule],
})
export class AboutBModule {}
