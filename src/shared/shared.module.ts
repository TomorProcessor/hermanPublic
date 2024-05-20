import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { SlideshowComponent } from 'src/shared/slideshow/slideshow.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from 'src/shared/footer/footer.component';
import { HeaderComponent } from 'src/shared/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ShowPipe } from './pipes/show.pipe';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { GoogleMapsModule, MapCircle } from '@angular/google-maps';
import { DateFormatPipe } from './pipes/dateFormat.pipe';
import { HeaderForStudentsComponent } from './headerForStudents/headerForStudents.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SlideshowComponent,
    ShowPipe,
    DateFormatPipe,
    DateFormatPipe,
    HeaderForStudentsComponent,
  ],
  imports: [
    FlexLayoutModule,
    MatCardModule,
    MatExpansionModule,
    RouterModule,
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    MatListModule,
    MatMenuModule,
    ReactiveFormsModule,
    NgIf,
    NgbModule,
    NgbCarouselModule,
    MatSlideToggleModule,
    MatCheckboxModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    GoogleMapsModule,
    MatSidenavModule,
  ],
  exports: [
    DateFormatPipe,
    MatCardModule,
    MatExpansionModule,
    SlideshowComponent,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    FooterComponent,
    HeaderComponent,
    HeaderForStudentsComponent,
    MatSlideToggleModule,
    ShowPipe,
    MatCheckboxModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    NgIf,
    MatSelectModule,
    MatSidenavModule,
  ],
})
export class SharedModule {}
