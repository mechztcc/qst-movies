import { Component, Input } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { MovieInterface } from 'src/app/modules/home/shared/types/movie.interface';

@Component({
  selector: 'app-wishlist-movie',
  templateUrl: './wishlist-movie.component.html',
  styleUrls: ['./wishlist-movie.component.scss'],
})
export class WishlistMovieComponent {
  @Input() movie: MovieInterface;

  icons = {
    star: faStar
  }
}
