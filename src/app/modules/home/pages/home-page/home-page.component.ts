import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { MovieInterface } from '../../shared/types/movie.interface';
import * as selectors from '../../shared/store/movies.selectors';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {
  crime: MovieInterface[] = [];
  comedy: MovieInterface[] = [];
  constructor(private store: Store<MovieInterface[]>) {}

  crimeCategory$ = this.store
    .select(selectors.crimeCategory)
    .subscribe((data) => {
      this.crime = data;
    });

  comedyCategory$ = this.store
    .select(selectors.comedyCategory)
    .subscribe((data) => {
      this.comedy = data;
    });
}
