import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { moviesReducer } from './modules/home/shared/store/movies.reducer';
import { whishlistReducer } from './modules/whishlist/shared/store/whishlist.reducer';
import { FooterComponent } from './shared/components/footer/footer.component';
import { NavegationBarComponent } from './shared/components/navegation-bar/navegation-bar.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NavegationBarComponent,
    FontAwesomeModule,
    FooterComponent,
    StoreModule.forRoot({ movies: moviesReducer, whishlist: whishlistReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
