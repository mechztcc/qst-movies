import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  faBookmark,
  faHeart,
  faPlayCircle,
  faStar,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { WhislistActions } from '../../../whishlist/shared/store/whishlist.actions';
import * as selectors from '../../../whishlist/shared/store/whishlist.selectors';
import { MovieInterface } from '../../shared/types/movie.interface';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
})
export class MovieCardComponent implements OnDestroy, OnInit {
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

  isOnWhishlist: MovieInterface;

  constructor(private store: Store<MovieInterface[]>, private router: Router) {}

  ngOnInit(): void {
    this.onVerifyWish();
  }

  ngOnDestroy(): void {
    this.allMovies$.unsubscribe();
  }

  onVerifyWish() {
    const movies = this.movies.filter((movie) => movie.id == this.movie.id);
    this.isOnWhishlist = movies[0];
  }

  onNavigate() {
    this.router.navigate([`/movies/${this.movie.id}/details`]);
  }

  onAddToWishList() {
    this.store.dispatch(WhislistActions.addMovie({ payload: this.movie }));
    this.onVerifyWish();
  }

  onRemoveFromWishList() {
    this.store.dispatch(
      WhislistActions.removeMovie({ movieId: this.movie.id })
    );
    this.onVerifyWish();

  }
}
