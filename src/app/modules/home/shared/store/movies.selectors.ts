import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from './movies.reducer';

export const selectMovies = createFeatureSelector<State>('movies');
export const generalMovies = createSelector(selectMovies, (store) => {
  return [...store.comedy, ...store.crime];
});
export const crimeCategory = createSelector(selectMovies, (store) => {
  return store.crime;
});
export const comedyCategory = createSelector(selectMovies, (store) => {
  return store.comedy;
});
