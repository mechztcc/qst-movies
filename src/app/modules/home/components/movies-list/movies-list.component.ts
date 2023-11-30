import { Component, Input } from '@angular/core';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { MovieInterface } from '../../shared/types/movie.interface';
import * as selectors from '../../shared/store/movies.selectors';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss'],
})
export class MoviesListComponent {
  @Input() title: string;
  @Input() movies: MovieInterface[] = [];

  icons = {
    right: faChevronRight,
    left: faChevronLeft,
  };

  moveLeft() {
    const ul = document.getElementById(this.title);
    let scrollCompleted = 0;
    let interval = setInterval(() => {
      ul.scrollLeft -= 15;
      scrollCompleted += 10;

      if (scrollCompleted >= 100) {
        window.clearInterval(interval);
      }
    }, 20);
  }

  moveRight() {
    const ul = document.getElementById(this.title);
    let scrollCompleted = 0;
    let interval = setInterval(() => {
      ul.scrollLeft += 15;
      scrollCompleted += 10;

      if (scrollCompleted >= 100) {
        window.clearInterval(interval);
      }
    }, 20);
  }
}
