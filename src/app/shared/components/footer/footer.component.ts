import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faFacebook,
  faInstagram,
  faYoutubeSquare,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  imports: [FontAwesomeModule],
})
export class FooterComponent {
  icons = {
    facebook: faFacebook,
    instagram: faInstagram,
    youtube: faYoutubeSquare,
  };
}
