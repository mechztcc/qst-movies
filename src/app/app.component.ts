import { Component, HostListener, OnInit } from '@angular/core';
import { ScreenInformationService } from './shared/services/screen-information/screen-information.service';
import { MovieInterface } from './modules/home/shared/types/movie.interface';
import { Store } from '@ngrx/store';
import { WhislistActions } from './modules/whishlist/shared/store/whishlist.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [],
})
export class AppComponent implements OnInit {
  constructor(
    private screen: ScreenInformationService,
    private store: Store<MovieInterface[]>
  ) {}

  ngOnInit(): void {
    const whishlist = localStorage.getItem('whishlist');
    const movies = JSON.parse(whishlist);

    if (movies.length > 0) {
      this.store.dispatch(WhislistActions.addMultiple({ payload: movies }));
    }
  }

  @HostListener('window:load', ['$event'])
  onLoad(event: any) {
    this.screen.innerHeight = window.innerHeight;
    this.screen.innerWidth = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screen.innerWidth = window.innerWidth;
    this.screen.innerHeight = window.innerHeight;
  }
  title = 'XPlay';
}
