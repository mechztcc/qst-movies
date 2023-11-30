import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from './whishlist.reducer';

export const selectWishlist = createFeatureSelector<State>('whishlist');
export const allMovies = createSelector(selectWishlist, (store) => {
  return store.wishlist;
});


