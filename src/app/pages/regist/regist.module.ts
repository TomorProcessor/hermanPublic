import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistRoutingModule } from './regist-routing.module';
import { RegistComponent } from './regist.component';
import { SharedModule } from 'src/shared/shared.module';

@NgModule({
  declarations: [RegistComponent],
  imports: [CommonModule, RegistRoutingModule, SharedModule],
})
export class RegistModule {}
