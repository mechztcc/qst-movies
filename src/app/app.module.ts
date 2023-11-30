import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavegationBarComponent } from './shared/components/navegation-bar/navegation-bar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterComponent } from './shared/components/footer/footer.component';
import { StoreModule } from '@ngrx/store';
import { moviesReducer } from './modules/home/shared/store/movies.reducer';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavegationBarComponent,
    FontAwesomeModule,
    FooterComponent,
    StoreModule.forRoot({ movies: moviesReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
