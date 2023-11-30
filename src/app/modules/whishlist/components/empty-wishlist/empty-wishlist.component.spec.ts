import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyWishlistComponent } from './empty-wishlist.component';

describe('EmptyWishlistComponent', () => {
  let component: EmptyWishlistComponent;
  let fixture: ComponentFixture<EmptyWishlistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmptyWishlistComponent]
    });
    fixture = TestBed.createComponent(EmptyWishlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
