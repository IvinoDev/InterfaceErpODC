import { TestBed } from '@angular/core/testing';

import { TirageService } from './tirage.service';

describe('TirageService', () => {
  let service: TirageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TirageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
