import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavegationBarComponent } from './navegation-bar.component';

describe('NavegationBarComponent', () => {
  let component: NavegationBarComponent;
  let fixture: ComponentFixture<NavegationBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavegationBarComponent]
    });
    fixture = TestBed.createComponent(NavegationBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
