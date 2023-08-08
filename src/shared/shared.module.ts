import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { SlideshowComponent } from 'src/shared/slideshow/slideshow.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from 'src/shared/footer/footer.component';
import { HeaderComponent } from 'src/shared/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, SlideshowComponent],
  imports: [
    RouterModule,
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule,
    NgbModule,
    NgbCarouselModule,
  ],
  exports: [
    SlideshowComponent,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule,
    FooterComponent,
    HeaderComponent,
  ],
})
export class SharedModule {}
