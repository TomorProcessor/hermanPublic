import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutCollegeRoutingModule } from './about-college-routing.module';
import { AboutCollegeComponent } from './about-college.component';
import { SharedModule } from 'src/shared/shared.module';

@NgModule({
  declarations: [AboutCollegeComponent],
  imports: [CommonModule, AboutCollegeRoutingModule, SharedModule],
})
export class AboutCollegeModule {}
