import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { MovieInterface } from '../../shared/types/movie.interface';
import * as selectors from '../../shared/store/movies.selectors';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss'],
})
export class SearchPageComponent {
  movies: MovieInterface[] = [];
  generalMovies$ = this.store
    .select(selectors.generalMovies)
    .subscribe((data) => {
      this.movies = data;
    });

  constructor(public store: Store<MovieInterface[]>) {}
}
