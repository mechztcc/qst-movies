import { Component, HostListener } from '@angular/core';
import { ScreenInformationService } from './shared/services/screen-information/screen-information.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [],
})
export class AppComponent {
  constructor(private screen: ScreenInformationService) {}

  @HostListener('window:load', ['$event'])
  onLoad(event: any) {
    this.screen.innerHeight = window.innerHeight;
    this.screen.innerWidth = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screen.innerWidth = window.innerWidth;
    this.screen.innerHeight = window.innerHeight;
  }
  title = 'XPlay';
}
