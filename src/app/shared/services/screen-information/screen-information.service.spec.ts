import { TestBed } from '@angular/core/testing';

import { ScreenInformationService } from './screen-information.service';

describe('ScreenInformationService', () => {
  let service: ScreenInformationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScreenInformationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
