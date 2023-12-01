import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchByReleaseComponent } from './search-by-release.component';

describe('SearchByReleaseComponent', () => {
  let component: SearchByReleaseComponent;
  let fixture: ComponentFixture<SearchByReleaseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchByReleaseComponent]
    });
    fixture = TestBed.createComponent(SearchByReleaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
