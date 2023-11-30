import { Component, Input } from '@angular/core';
import { faStar, faTrash } from '@fortawesome/free-solid-svg-icons';
import { MovieInterface } from 'src/app/modules/home/shared/types/movie.interface';
import { ScreenInformationService } from 'src/app/shared/services/screen-information/screen-information.service';

@Component({
  selector: 'app-wishlist-movie',
  templateUrl: './wishlist-movie.component.html',
  styleUrls: ['./wishlist-movie.component.scss'],
})
export class WishlistMovieComponent {
  @Input() movie: MovieInterface;

  icons = {
    star: faStar,
    remove: faTrash
  };

  constructor(public screen: ScreenInformationService) {}
}
