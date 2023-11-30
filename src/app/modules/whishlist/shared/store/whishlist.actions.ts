import { createActionGroup, props } from '@ngrx/store';
import { MovieInterface } from 'src/app/modules/home/shared/types/movie.interface';

export const WhislistActions = createActionGroup({
  source: 'MovieInterface',
  events: {
    'Add Movie': props<{ payload: MovieInterface }>(),
    'Add Multiple': props<{ payload: MovieInterface[] }>(),
    'Remove Movie': props<{ movieId: number }>(),
  },
});
