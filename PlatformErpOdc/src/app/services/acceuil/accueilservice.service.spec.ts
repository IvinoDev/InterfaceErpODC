import { TestBed } from '@angular/core/testing';

import { AccueilserviceService } from './accueilservice.service';

describe('AccueilserviceService', () => {
  let service: AccueilserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccueilserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
