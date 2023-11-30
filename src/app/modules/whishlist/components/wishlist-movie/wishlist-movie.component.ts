import { Component, Input } from '@angular/core';
import { faStar, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { MovieInterface } from 'src/app/modules/home/shared/types/movie.interface';
import { ScreenInformationService } from 'src/app/shared/services/screen-information/screen-information.service';
import { WhislistActions } from '../../../whishlist/shared/store/whishlist.actions';

@Component({
  selector: 'app-wishlist-movie',
  templateUrl: './wishlist-movie.component.html',
  styleUrls: ['./wishlist-movie.component.scss'],
})
export class WishlistMovieComponent {
  @Input() movie: MovieInterface;

  icons = {
    star: faStar,
    remove: faTrash,
  };

  constructor(
    public screen: ScreenInformationService,
    private store: Store<MovieInterface[]>
  ) {}

  onRemove() {
    this.store.dispatch(
      WhislistActions.removeMovie({ movieId: this.movie.id })
    );
  }
}
