import { Component, OnInit } from '@angular/core';
import {
  faChevronLeft,
  faChevronRight,
  faStar,
} from '@fortawesome/free-solid-svg-icons';
import { MovieInterface } from '../../shared/types/movie.interface';
import { fade } from 'src/app/shared/animations/fade.animation';

@Component({
  selector: 'app-movie-carousel',
  templateUrl: './movie-carousel.component.html',
  styleUrls: ['./movie-carousel.component.scss'],
  animations: [fade],
})
export class MovieCarouselComponent implements OnInit {
  icons = {
    left: faChevronLeft,
    right: faChevronRight,
    star: faStar,
  };

  movies: MovieInterface[] = [
    {
      id: 1,
      name: 'Justice league',
      age: '12',
      release: '2017',
      category: 'Fantasy',
      description: `
      Fueled by his faith and inspired by Superman's selfless act, Bruce Wayne enlists the help of his newfound ally, Diana Prince, to face an even greater enemy.`,
      duration: '2h',
      score: '6.1',
      totalScore: '472 mil',
      image: 'assets/league-w.jpg',
    },
    {
      id: 2,
      name: 'Batman Vs Superman',
      age: '12',
      release: '2016',
      category: 'Fantasy',
      description: `
      Batman is manipulated by Lex Luthor into fearing Superman. Meanwhile, Superman's existence is dividing the world as he is accused of murder during a crisis. The heroes clash and force Wonder Woman to resurface.`,
      duration: '2h 31 min',
      score: '6.5',
      totalScore: '743 mil',
      image: 'assets/batvs.jpg',
    },
  ];

  index: number = 0;
  selectedMovie: MovieInterface = this.movies[this.index];

  ngOnInit(): void {
    setInterval(() => {
      if (this.index == 0) {
        this.selectedMovie = this.movies[1];
        this.index = 1;
      } else {
        this.index = 0;
        this.selectedMovie = this.movies[0];
      }
    }, 5000);
  }

  onNext() {
    let actual = null;
    this.movies.map((movie, index) => {
      if (movie.id === this.selectedMovie.id) {
        actual = index;
      }
    });

    if (this.movies[actual + 1]) {
      this.selectedMovie = this.movies[actual + 1];
    } else {
      this.selectedMovie = this.movies[0];
    }
  }

  onPrevius() {
    let actual = null;
    this.movies.map((movie, index) => {
      if (movie.id === this.selectedMovie.id) {
        actual = index;
      }
    });

    if (actual > 0) {
      this.selectedMovie = this.movies[actual - 1];
    } else {
      this.selectedMovie = this.movies[this.movies.length - 1];
    }
  }
}
