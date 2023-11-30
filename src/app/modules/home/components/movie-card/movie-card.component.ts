import { Component, Input } from '@angular/core';
import {
  faBookmark,
  faHeart,
  faPlayCircle,
  faStar,
} from '@fortawesome/free-solid-svg-icons';
import { MovieInterface } from '../../shared/types/movie.interface';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
})
export class MovieCardComponent {
  @Input() movie: MovieInterface;
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
