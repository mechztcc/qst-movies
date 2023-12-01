import { Injectable } from '@angular/core';
import { MovieInterface } from '../types/movie.interface';
import * as selectors from '../../shared/store/movies.selectors';
import { Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root',
})
export class SearchEngineService {
  category: string = 'all';
  year: string = '2023';
  score: string = '10.0';
  name: string = '';

  movies: MovieInterface[] = [];
  moviesFiltered: MovieInterface[] = [];
  generalMovies$ = this.store
    .select(selectors.generalMovies)
    .subscribe((data) => {
      this.movies = data;
      this.moviesFiltered = data;
    });

  constructor(public store: Store<MovieInterface[]>) {}

  onSearchByCategory(category: string) {
    this.clear();

    this.category = category;
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

  onSearchByRelease(year: string) {
    this.clear();

    this.year = year;
    this.moviesFiltered = this.movies.filter((movie) => {
      return movie.release == year;
    });
  }

  onSearchByScore(score: string) {
    this.clear();

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

  onFilterByName(name: string) {
    this.clear();
    if (!name) {
      this.moviesFiltered = this.movies;
      return;
    }
    this.moviesFiltered = this.movies.filter((movie) => {
      return movie.name.toLowerCase().includes(name.toLowerCase());
    });
  }

  clear() {
    this.category = 'all';
    this.year = '2023';
    this.score = '10.0';
    this.name = '';

    this.moviesFiltered = this.movies;
  }
}
