import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WhishlistRoutingModule } from './whishlist-routing.module';
import { WhishlistPageComponent } from './pages/whishlist-page/whishlist-page.component';
import { WishlistMovieComponent } from './components/wishlist-movie/wishlist-movie.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    WhishlistPageComponent,
    WishlistMovieComponent
  ],
  imports: [
    CommonModule,
    WhishlistRoutingModule,
    FontAwesomeModule
  ]
})
export class WhishlistModule { }
