import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faFacebook,
  faGit,
  faInstagram,
  faLinkedin,
  faYoutubeSquare,
} from '@fortawesome/free-brands-svg-icons';
import { fade } from '../../animations/fade.animation';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  imports: [FontAwesomeModule, RouterModule],
  animations: [fade],
})
export class FooterComponent {
  icons = {
    linkedin: faLinkedin,
    git: faGit,
  };
}
