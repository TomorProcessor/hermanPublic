import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuestRoutingModule } from './guest-routing.module';
import { GuestComponent } from './guest.component';
import { MatTableModule } from '@angular/material/table';
import { SharedModule } from 'src/shared/shared.module';

@NgModule({
  declarations: [GuestComponent],
  imports: [CommonModule, GuestRoutingModule, MatTableModule, SharedModule],
})
export class GuestModule {}
