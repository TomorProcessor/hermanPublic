import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfosRoutingModule } from './infos-routing.module';
import { InfosComponent } from './infos.component';
import { MatListModule } from '@angular/material/list';
import { SharedModule } from 'src/shared/shared.module';

@NgModule({
  declarations: [InfosComponent],
  imports: [CommonModule, InfosRoutingModule, MatListModule, SharedModule],
})
export class InfosModule {}
