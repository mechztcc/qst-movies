import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchByScoreComponent } from './search-by-score.component';

describe('SearchByScoreComponent', () => {
  let component: SearchByScoreComponent;
  let fixture: ComponentFixture<SearchByScoreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchByScoreComponent]
    });
    fixture = TestBed.createComponent(SearchByScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
