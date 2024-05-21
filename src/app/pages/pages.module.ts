import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/shared/shared.module';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { MatExpansionModule } from '@angular/material/expansion';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule,
    HttpClientJsonpModule,
    MatExpansionModule,
    FormsModule,
    MatCheckboxModule,
    MatRadioModule,
  ],
  declarations: [],
  exports: [],
})
export class PagesModule {}
