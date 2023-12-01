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
import { SearchByNameComponent } from './components/search-by-name/search-by-name.component';
import { SearchByCategoryComponent } from './components/search-by-category/search-by-category.component';
import { MovieDetailsPageComponent } from './pages/movie-details-page/movie-details-page.component';
import { SearchByReleaseComponent } from './components/search-by-release/search-by-release.component';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';

@NgModule({
  declarations: [
    HomePageComponent,
    MovieCarouselComponent,
    MovieCardComponent,
    MoviesListComponent,
    SearchPageComponent,
    SearchByScoreComponent,
    SearchByNameComponent,
    SearchByCategoryComponent,
    MovieDetailsPageComponent,
    SearchByReleaseComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FontAwesomeModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    NgxMaskDirective,
    NgxMaskPipe,
  ],
  exports: [MovieCardComponent],
  providers: [provideNgxMask()],
})
export class HomeModule {}
