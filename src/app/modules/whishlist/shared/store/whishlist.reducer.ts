import { createReducer, on } from '@ngrx/store';
import { MovieInterface } from 'src/app/modules/home/shared/types/movie.interface';
import { WhislistActions } from './whishlist.actions';

export interface State {
  wishlist: MovieInterface[];
}

export const initialState: State = {
  wishlist: [],
};

export const whishlistReducer = createReducer(
  initialState,
  on(WhislistActions.addMultiple, (state, { payload }) => {
    return { ...state, wishlist: [...state.wishlist, ...payload] };
  }),
  on(WhislistActions.addMovie, (state, { payload }) => {
    const movieExists = state.wishlist.filter(
      (movie) => movie.id === payload.id
    );
    if (movieExists.length > 0) {
      return {
        ...state,
      };
    }

    localStorage.setItem(
      'whishlist',
      JSON.stringify([...state.wishlist, payload])
    );

    return { ...state, wishlist: [...state.wishlist, payload] };
  }),
  on(WhislistActions.removeMovie, (state, { movieId }) => {
    const newWhishlist = state.wishlist.filter((movie) => {
      return movie.id !== movieId;
    });

    localStorage.setItem('whishlist', JSON.stringify(newWhishlist));

    return {
      ...state,
      wishlist: newWhishlist,
    };
  })
);
