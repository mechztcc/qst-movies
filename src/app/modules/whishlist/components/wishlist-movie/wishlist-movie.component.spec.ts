import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WishlistMovieComponent } from './wishlist-movie.component';

describe('WishlistMovieComponent', () => {
  let component: WishlistMovieComponent;
  let fixture: ComponentFixture<WishlistMovieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WishlistMovieComponent]
    });
    fixture = TestBed.createComponent(WishlistMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
