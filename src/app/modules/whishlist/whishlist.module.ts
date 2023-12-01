import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WhishlistRoutingModule } from './whishlist-routing.module';
import { WhishlistPageComponent } from './pages/whishlist-page/whishlist-page.component';
import { WishlistMovieComponent } from './components/wishlist-movie/wishlist-movie.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EmptyWishlistComponent } from './components/empty-wishlist/empty-wishlist.component';
import { HomeModule } from '../home/home.module';


@NgModule({
  declarations: [
    WhishlistPageComponent,
    WishlistMovieComponent,
    EmptyWishlistComponent
  ],
  imports: [
    CommonModule,
    WhishlistRoutingModule,
    FontAwesomeModule,
    HomeModule
  ]
})
export class WhishlistModule { }
