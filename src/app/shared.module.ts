import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from 'src/shared/header/header.component';
import { FooterComponent } from 'src/shared/footer/footer.component';
import { MatToolbarModule } from '@angular/material/toolbar';
@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [CommonModule],
  exports: [HeaderComponent, FooterComponent, MatToolbarModule],
})
export class SharedModule {}
