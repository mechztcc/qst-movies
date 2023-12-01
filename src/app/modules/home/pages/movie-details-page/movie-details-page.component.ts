import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieInterface } from '../../shared/types/movie.interface';
import * as selectors from '../../shared/store/movies.selectors';
import { Store } from '@ngrx/store';
import { DomSanitizer } from '@angular/platform-browser';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-movie-details-page',
  templateUrl: './movie-details-page.component.html',
  styleUrls: ['./movie-details-page.component.scss'],
})
export class MovieDetailsPageComponent implements OnInit, OnDestroy {
  icons = {
    back: faChevronLeft,
  };
  movie: MovieInterface;

  movies$ = this.store.select(selectors.generalMovies).subscribe((movies) => {
    const { id } = this.routes.params['_value'];

    movies.map((movie) => {
      if (movie.id == id) {
        this.movie = movie;
      }
    });
  });

  embed() {
    return this._sanitizer.bypassSecurityTrustResourceUrl(this.movie?.embed);
  }

  constructor(
    private routes: ActivatedRoute,
    public store: Store<MovieInterface[]>,
    protected _sanitizer: DomSanitizer
  ) {}

  ngOnDestroy(): void {
    this.movies$.unsubscribe();
  }

  ngOnInit(): void {
    this.onFindDetails();
  }

  onFindDetails() {}
}
