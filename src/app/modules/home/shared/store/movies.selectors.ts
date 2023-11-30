import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from './movies.reducer';

export const selectPhotos = createFeatureSelector<State>('movies');
export const crimeCategory = createSelector(selectPhotos, (store) => {
  return store.crime;
});
export const comedyCategory = createSelector(selectPhotos, (store) => {
  return store.comedy;
});
