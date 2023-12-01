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
  moviesFiltered: MovieInterface[] = [];
  generalMovies$ = this.store
    .select(selectors.generalMovies)
    .subscribe((data) => {
      this.movies = data;
      this.moviesFiltered = data;
    });

  clearFilters: boolean = false;

  constructor(public store: Store<MovieInterface[]>) {}

  onFilterByName(name: string) {
    this.clearFilters = true;

    if (!name) {
      this.moviesFiltered = this.movies;
      return;
    }
    this.moviesFiltered = this.movies.filter((movie) => {
      return movie.name.toLowerCase().includes(name.toLowerCase());
    });
  }

  onFilterByScore(score: string) {
    if (!score) {
      this.moviesFiltered = this.movies;
      return;
    }
    this.moviesFiltered = this.movies.filter((movie) => {
      const target = Number(movie.score) ?? 0;
      const param = Number(score) ?? 0;
      return target <= param;
    });
  }

  onFilterByCategory(category: string) {
    this.clearFilters = true;
    if (category === 'crime') {
      let crime$ = this.store
        .select(selectors.crimeCategory)
        .subscribe((data) => {
          this.moviesFiltered = data;
        });
    }

    if (category === 'animation') {
      let animation$ = this.store
        .select(selectors.comedyCategory)
        .subscribe((data) => {
          this.moviesFiltered = data;
        });
    }

    if (category === 'all') {
      this.moviesFiltered = this.movies;
    }
  }
}
