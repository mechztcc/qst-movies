import { Component } from '@angular/core';
import {
  faBookmark,
  faHeart,
  faPlayCircle,
  faStar,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
})
export class MovieCardComponent {
  icons = {
    star: faStar,
    add: faBookmark,
    play: faPlayCircle,
    heart: faHeart,
  };

  isHover: boolean = false;

  onNavigate() {
    console.log('navigating');
  }
}
