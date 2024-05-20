import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { NewsRoutingModule } from './news-routing.module';
import { NewsComponent } from './news.component';
import { SharedModule } from 'src/shared/shared.module';

@NgModule({
  declarations: [NewsComponent],
  imports: [CommonModule, NewsRoutingModule, SharedModule, MatTableModule],
})
export class NewsModule {}
