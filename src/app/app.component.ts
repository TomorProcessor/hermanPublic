import { Component, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Herman Ottó kollégium';

  showButton: boolean = false;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (window.pageYOffset > 100) {
      this.renderer.setStyle(
        this.el.nativeElement.querySelector('#backToTop'),
        'display',
        'block'
      );
    } else {
      this.renderer.setStyle(
        this.el.nativeElement.querySelector('#backToTop'),
        'display',
        'none'
      );
    }
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
