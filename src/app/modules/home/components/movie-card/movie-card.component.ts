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
import { Router } from '@angular/router';

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
    delete: faTrash,
  };

  movies: MovieInterface[] = [];

  isHover: boolean = false;
  allMovies$ = this.store.select(selectors.allMovies).subscribe((movies) => {
    this.movies = movies;
  });

  constructor(private store: Store<MovieInterface[]>, private router: Router) {}

  onNavigate() {
    this.router.navigate([`/movies/${this.movie.id}/details`]);
  }

  onAddToWishList() {
    this.store.dispatch(WhislistActions.addMovie({ payload: this.movie }));
  }

  onRemoveFromWishList() {
    this.store.dispatch(
      WhislistActions.removeMovie({ movieId: this.movie.id })
    );
  }
}
