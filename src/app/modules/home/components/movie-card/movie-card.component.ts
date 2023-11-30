import { Component, Input } from '@angular/core';
import {
  faBookmark,
  faHeart,
  faPlayCircle,
  faStar,
  faTrash,
  faTrashArrowUp,
} from '@fortawesome/free-solid-svg-icons';
import { MovieInterface } from '../../shared/types/movie.interface';
import { Store } from '@ngrx/store';
import { WhislistActions } from '../../../whishlist/shared/store/whishlist.actions';
import * as selectors from '../../../whishlist/shared/store/whishlist.selectors';

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
    delete: faTrash
  };

  isHover: boolean = false;
  isOnWishlist: boolean = false;
  isSelected$ = this.store.select(selectors.allMovies).subscribe((data) => {
    data.map((movie) => {
      if (movie.id === this.movie.id) {
        this.isOnWishlist = true;
      }
    });
  });

  constructor(private store: Store<MovieInterface[]>) {}

  onNavigate() {
    console.log('navigating');
  }

  onAddToWishList() {
    this.store.dispatch(WhislistActions.addMovie({ payload: this.movie }));
  }
}
