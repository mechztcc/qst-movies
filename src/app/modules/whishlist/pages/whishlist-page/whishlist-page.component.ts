import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { MovieInterface } from 'src/app/modules/home/shared/types/movie.interface';
import * as selectors from '../../shared/store/whishlist.selectors';

@Component({
  selector: 'app-whishlist-page',
  templateUrl: './whishlist-page.component.html',
  styleUrls: ['./whishlist-page.component.scss'],
})
export class WhishlistPageComponent {
  whishlist$ = this.store.select(selectors.allMovies).subscribe((data) => {
    console.log(data);
  });

  constructor(private store: Store<MovieInterface[]>) {}
}
