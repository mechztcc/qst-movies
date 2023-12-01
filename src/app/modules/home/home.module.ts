import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MovieCarouselComponent } from './components/movie-carousel/movie-carousel.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { SearchByScoreComponent } from './components/search-by-score/search-by-score.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomePageComponent,
    MovieCarouselComponent,
    MovieCardComponent,
    MoviesListComponent,
    SearchPageComponent,
    SearchByScoreComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FontAwesomeModule,
    FontAwesomeModule,
    ReactiveFormsModule,
  ],
})
export class HomeModule {}
